import {Usuario} from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'


export const registro = async (req, res) => {
  const { nombre, correo, numero, contrasena, categoria, rol} = req.body;
    
 try{
      const contrasenaHash = await bcrypt.hash(contrasena, 10)

    const newUser = new Usuario({
        nombre,
        correo,
        numero,
        contrasena: contrasenaHash,
        categoria,
        rol
        })
    
      const usuarioSaved = await newUser.save();

      const token = await createAccessToken({id: usuarioSaved._id});
      res.cookie('token', token)
      res.json({
         id: usuarioSaved._id,
         nombre_usuario: usuarioSaved.nombre_usuario,
         usuario: usuarioSaved.usuario,
         numero: usuarioSaved.numero
      });

   

 }catch(error){
    console.log(error);
 }

 
};

export const login = async (req, res) => {
   const { correo, contrasena } = req.body;

   try {
       //  Buscar usuario en la BD por correo
       const usuario = await Usuario.findOne({ correo });
       if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

       //  Verificar la contraseña
       const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
       if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

       //  Crear un Token JWT
       const token = await createAccessToken({ id: usuario._id });

       //  Enviar token como cookie
       res.cookie('token', token, { httpOnly: true });
       res.json({
           id: usuario._id,
           nombre_apellido: usuario.nombre_apellido,
           rol: usuario.rol
       });

   } catch (error) {
       console.error(error);
       res.status(500).json({ message: "Error en el servidor" });
   }
};

 export const logout = async (req, res) =>{
   res.cookie('token', '',{
      expires: new Date(0)
   })
   return res.sendStatus(200)
 }
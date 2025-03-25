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
   const { correo, contrasena} = req.body;
     
  try{

      const userFound = await Usuario.findOne({correo})
      if (!userFound) return res.status(400).json({message:'Usuario no encontrado'});

      const contrasenaMatch = await bcrypt.compare(contrasena, userFound.contrasena)
      if(!contrasenaMatch) return res.status(400).json({message:'Contraseña Incorrecta'})
  
      const token = await createAccessToken({id: userFound._id});
      res.cookie('token', token)
      res.json({
         id: userFound._id,
         nombre_usuario: userFound.nombre_usuario,
         usuario: userFound.usuario
      });
 
 
  }catch(error){
     console.log(error);
  }
 
  
 };


 export const logout = async (req, res) =>{
   res.cookie('token', '',{
      expires: new Date(0)
   })
   return res.sendStatus(200)
 }
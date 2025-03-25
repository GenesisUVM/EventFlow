import {RegisCompetencia} from '../models/registroCompetenciaModel.js'



export const registroCompetencias = async (req, res) => {
  const {nombre, edad, competencia, metodo_pago} = req.body;
    
 try{
   

    const newRegistro = new RegisCompetencia({
        nombre,
        edad,
        competencia,
        metodo_pago
        })
    
      const registroSaved = await newRegistro.save();

    
      res.json({
         nombre: registroSaved.nombre,
         edad: registroSaved.edad,
         competencia: registroSaved.competencia,
         metodo_pago: registroSaved.metodo_pago
      });

   

 }catch(error){
    console.log(error);
 }

 
};

export const datosRegisrosCompetencia = async (req, res) => {
   try {
      const registroCompetencia = await RegisCompetencia.find();
      res.json(registroCompetencia);
   } catch (error) {
         res.status(500).send(error);
   }
};
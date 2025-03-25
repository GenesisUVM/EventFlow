import {Tiempo} from '../models/tiemposAtletasModel.js'



export const tiempo = async (req, res) => {
    const {competencia, nombre, tiempo,posicion} = req.body;
      
   try{
  
      const newTiempo = new Tiempo({
         competencia,
         nombre,
         tiempo,
         posicion
         })
      
      const tiempoSaved = await newTiempo.save();
  
        
      res.json({
         competencia: tiempoSaved.competencia,
         nombre: tiempoSaved.nombre,
         tiempo: tiempoSaved.tiempo,
         posicion: tiempoSaved.posicion
        });
  
     
  
   }catch(error){
      console.log(error);
   }
  
   
  };

  export const datosGanadores = async (req, res) => {
   try {
      const ganadores = await Tiempo.find();
      res.json(ganadores);
   } catch (error) {
         res.status(500).send(error);
   }
};
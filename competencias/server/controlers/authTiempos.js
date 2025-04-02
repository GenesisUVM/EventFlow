import {Tiempo} from '../models/tiemposAtletasModel.js'
import mongoose from "mongoose";



export const tiempo = async (req, res) => {
    const {competencia, nombre, tiempo,posicion} = req.body;
      
   try{
  
      const newTiempo = new Tiempo({
         competencia: mongoose.Types.ObjectId(competencia), 
         nombre: mongoose.Types.ObjectId(nombre), 
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
      const ganadores = await Tiempo.find()
         .populate({ path: 'nombre', select: 'nombre' }) 
         .populate({ path: 'competencia', select: 'competencia' });

      res.json(ganadores);
   } catch (error) {
      console.error('Error al obtener los ganadores:', error);
      res.status(500).send(error);
   }
};


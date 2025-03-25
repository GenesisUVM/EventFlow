import {Competencia} from '../models/competenciasModel.js'




export const competencia = async (req, res) => {
    const {competencia, categoria, sexo, relevo, fecha, tiempo_limite} = req.body;
      
   try{
  
      const newCompetencia = new Competencia({
         competencia,
         categoria,
         sexo,
         relevo,
         fecha,
         tiempo_limite
         })
      
      const competenciaSaved = await newCompetencia.save();
  
        
      res.json({
         competencia: competenciaSaved.competencia,
         categoria: competenciaSaved.categoria,
         sexo: competenciaSaved.sexo,
         relevo: competenciaSaved.relevo,
         fecha: competenciaSaved.fecha,
         tiempo_limite: competenciaSaved.tiempo_limite
        });
  
     
  
   }catch(error){
      console.log(error);
   }
  
   
  };

  export const datosCompetencia = async (req, res) => {
      try {
         const competencia = await Competencia.find();
         res.json(competencia);
      } catch (error) {
            res.status(500).send(error);
      }
  };

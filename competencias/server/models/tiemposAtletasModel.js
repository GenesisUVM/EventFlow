import mongoose from "mongoose";


const TiemposSchema = new mongoose.Schema({
    competencia:{
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },nombre: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },tiempo: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },posicion:{
        type: mongoose.Schema.Types.String, required:true,
    }
});

export  const Tiempo = mongoose.model("TiempoAtleta", TiemposSchema);
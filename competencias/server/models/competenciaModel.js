import mongoose from "mongoose";


const CompetenciaSchema = new mongoose.Schema({
    competencia:{
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },categoria: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },sexo: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },relevo: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },fecha: {
        type: mongoose.Schema.Types.Date , required: true, trim: true,
    },tiempo_limite: {
        type: mongoose.Schema.Types.Date , required: true, trim: true,
    },
});

export  const Competencia = mongoose.model("Competencia", CompetenciaSchema);
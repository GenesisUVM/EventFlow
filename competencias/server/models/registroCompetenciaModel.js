import mongoose from "mongoose";


const regisCompetenciaSchema = new mongoose.Schema({
    nombre: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },edad: {
        type: mongoose.Schema.Types.Number, required: true, trim: true,
    },competencia:{
        type: mongoose.Schema.Types.ObjectId, required: true, trim:true,
    },
    metodo_pago: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    }
});

export  const RegisCompetencia = mongoose.model("registroCompetencia", regisCompetenciaSchema);
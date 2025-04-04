// models/tiemposAtletasModel.js
import mongoose from 'mongoose';

const tiempoSchema = new mongoose.Schema({
  competencia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Competencia',
    required: true
  },
  nombre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RegisCompetencia',
    required: true
  },
  tiempo: {
    type: String,
    required: true
  }
});

export const Tiempo = mongoose.model('Tiempo', tiempoSchema);

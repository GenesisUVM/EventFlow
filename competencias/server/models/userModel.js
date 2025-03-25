import mongoose from "mongoose";


const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },correo: {
        type: mongoose.Schema.Types.String, required: true, trim: true, unique: true
    },numero: {
        type: mongoose.Schema.Types.Number, required: true, trim: true,
    },contrasena: {
        type: mongoose.Schema.Types.String, required: true, trim: true, unique: true
    },categoria: {
        type: mongoose.Schema.Types.String, required: true,
    },rol:{
        type: mongoose.Schema.Types.String, required: true,
    }
});

export  const Usuario = mongoose.model("Usuario", UsuarioSchema);
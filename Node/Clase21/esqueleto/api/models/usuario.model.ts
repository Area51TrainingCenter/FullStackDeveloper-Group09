import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  correo: String,
  contrasena: String
})

const Usuario = mongoose.model("Usuario", esquema)

export default Usuario
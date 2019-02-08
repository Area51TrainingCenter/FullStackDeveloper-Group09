const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  correo: {
    type: String,
    required: true,
    unique: true,
    email: true,
    trim: true,
    lowerCase: true
  },
  contrasena: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  foto: String,
  refreshToken: {
    type: String,
    required: true
  },
  rol: {
    type: mongoose.Schema.ObjectId,
    ref: "Rol"
  }
})

const Usuario = mongoose.model("Usuario", esquema)

export default Usuario
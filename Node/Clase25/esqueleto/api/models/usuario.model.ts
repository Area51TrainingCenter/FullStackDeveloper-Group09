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

esquema.static.listar = function(pagina){
  const tamano = 3
  return this.aggregate(
    [
      {
        $skip:  pagina*tamano
      },
      {
        $limit: tamano
      },
      {
          $lookup: {
              from: "autores",
              localField: "autor",
              foreignField: "_id",
              as: "autor"
          }
      },
      {
          $group: {
              _id: {"autor": "$autor.nombre"}, cuenta: {$sum: 1} 
          }
      },
      {
          $project: {"_id.autor": 1, cuenta: 1}
      }
  ]
  )
}

const Usuario = mongoose.model("Usuario", esquema)

export default Usuario
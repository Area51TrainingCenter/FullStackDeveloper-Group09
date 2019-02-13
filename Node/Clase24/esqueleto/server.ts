// Importaciones
import express = require("express")
import { Request, Response, NextFunction } from "express"
import bodyParser = require("body-parser")
import {router as routerUsuarios} from "./routes/usuarios.route"
import {router as routerIndex} from "./routes/index.route"
import {router as routerRoles} from "./routes/roles.route"
import { handlerErrors } from './handlers/errors.handler';
import mongoose = require("mongoose")

// Definición de constantes
const PORT = 4000

// Declaración de variables
const app = express()

// Conexión a Mongo
mongoose.Promise = global.Promise
mongoose.connect("mongodb://user_prueba:abcd123456789@cluster0-shard-00-00-mgpgx.mongodb.net:27017,cluster0-shard-00-01-mgpgx.mongodb.net:27017,cluster0-shard-00-02-mgpgx.mongodb.net:27017/colegios?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", {useNewUrlParser: true})
mongoose.connection.on("connected", ()=> console.log("Conectado a Mongo"))
mongoose.connection.on("error", error => console.log(error))

// Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Modelos
require("./api/models/usuario.model")
require("./api/models/rol.model")

// Middlewares de rutas
app.use("/", routerIndex)
app.use("/usuarios", routerUsuarios)
app.use("/roles", routerRoles)

//app.use(express.static("./public"))

// Manejo de errores
app.use(handlerErrors.notFound)
app.use(handlerErrors.general)

app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`))
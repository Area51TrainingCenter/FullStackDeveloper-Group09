// Importaciones
import express = require("express")
import { Request, Response } from "express"
import bodyParser = require("body-parser")
import {router as routerUsuarios} from "./routes/usuarios.route"
import {router as routerIndex} from "./routes/index.route"

// Definición de constantes
const PORT = 4000

// Declaración de variables
const app = express()

// Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Middlewares de rutas
app.use("/", routerIndex)
app.use("/usuarios", routerUsuarios)


app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`))
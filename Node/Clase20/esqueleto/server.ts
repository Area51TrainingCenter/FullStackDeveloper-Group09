// Importaciones
import express = require("express")
import { Request, Response } from "express"
import bodyParser = require("body-parser")

// Definición de constantes
const PORT = 4000

// Declaración de variables
const app = express()

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rutas
app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send("Home")
})

app.get("/quienes", (req: Request, res: Response) => {
  res
    .status(200)
    .type("text/html")
    .send("<h1>Quienes</h1>")
})

app.get("/servicios", (req: Request, res: Response) => {
  res
    .status(200)
    .type("text/html")
    .send("<h1>Servicios</h1>")
})

app.get("/usuarios", (req: Request, res: Response) => {
  const usuarios = ["Carmen", "Pedro", "Alfonso", "Claudia"]

  res
    .json(usuarios)
})

app.get("/usuarios/:id", (req: Request, res: Response) => {
  const id = req.params.id
  const usuario = {nombre: `Brenda: ${id}`}

  res.json(usuario)
})

app.post("/usuarios", (req: Request, res: Response) => {
  const usuarios = []
  const body = req.body

  usuarios.push(body)

  //res.end("ok")
  //res.json({status: 200, message: "Registro insertado"})
  res.json({status: 200, resultado: body})
})

app.put("/usuarios/:id", (req: Request, res: Response) => {
  const body = req.body
  const id = req.params.id

  res.json({status: 200, resultado: body, message: `Registro actualizado: ${id}`})
})

app.delete("/usuarios/:id", (req: Request, res: Response) => {
  const id = req.params.id

  res.json({status: 200, message: `Registro eliminado: ${id}`})
})


app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`))
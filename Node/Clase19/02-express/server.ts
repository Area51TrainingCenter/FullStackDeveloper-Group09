import express = require("express")
import { Application } from "express"

const app: Application = express()

app.use("/usuarios", (req, res, next) => {
  console.log("ruta", req.url)
  //if(!req.headers["authorization"]) {
  if(8>6){
    return res
      .status(401)
      .json({
        status: 404,
        message: "User is not logged"
      })
  }

  next()
})


app.get("/", (req, res) => {
  res
    .type("text/plain")
    .status(200)
    .send("Home")
})

app.get("/usuarios", (req, res) => {
  res
    .type("application/json")
    .json([
      { nombre: "usuario 1" },
      { nombre: "usuario 2" }
    ])
})

app.get("/usuarios/inactivos", (req, res) => {
  res
    .type("application/json")
    .json([
      { nombre: "usuario 3" },
      { nombre: "usuario 4" }
    ])
})

app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id
  res
    .type("application/json")
    .json([
      { nombre: "usuario " + id }
    ])
})



app.get("/descargar", (req, res) => {
  res
    .type("application/pdf")
    .download("./manual.pdf")
})

app.listen(3000)
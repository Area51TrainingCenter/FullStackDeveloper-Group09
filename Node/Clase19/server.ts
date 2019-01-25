import http = require("http")
import fs = require("fs")
import {controlador} from "./controlador"

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse)=>{

  if(req.url=="/home/" && req.method=="GET") {
    return controlador.home(req, res)
  }

  if(req.url=="/usuarios/" && req.method=="POST") {
    res.setHeader("content-type", "application/json")
    res.end(JSON.stringify(
      [
        {nombre: "Usuario1"},
        {nombre: "Usuario2"}
      ]
    ))
  }

  if(req.url=="/descargar/") {
    const lector = fs.createReadStream("./manual.pdf")
    res.setHeader("content-type", "application/pdf")
    lector.pipe(res)
  }

  if(req.url=="/redireccionar/") {
    res.statusCode=302
    res.setHeader("Location", "https://google.com")
    res.end()
  }

  res.statusCode = 404
  res.setHeader("content-type", "text/plain")
  res.end("Ruta no encontrada")

  
})
servidor.listen(3000, ()=> console.log("Servidor ejecutándose en el puerto 3000"))
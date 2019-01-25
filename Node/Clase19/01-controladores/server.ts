import http = require("http")
import fs = require("fs")
import {controlador} from "./controlador"
import { errores } from "./errores";

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse)=>{

  if(req.url=="/home/" && req.method=="GET") {
    return controlador.home(req, res)
  }

  if(req.url=="/usuarios/" && req.method=="POST") {
    return controlador.usuarios(req, res)
  }

  if(req.url=="/descargar/") {
    return controlador.descargar(req, res)
  }

  if(req.url=="/redireccionar/") {
    return controlador.redireccionar(req, res)
  }

  return errores.rutaNoEncontrada(req, res)

  
})
servidor.listen(3000, ()=> console.log("Servidor ejecutándose en el puerto 3000"))
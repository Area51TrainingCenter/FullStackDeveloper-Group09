import express = require("express")
import { Request, Response, NextFunction} from "express"
import { UsuariosController } from '../api/controllers/usuarios.controller'
import { IError } from "../interfaces/error.interface";
import { handlerErrors } from "../handlers/errors.handler";

const router = express.Router()
const controller = new UsuariosController()

const autenticar = (req: Request, res: Response, next: NextFunction) => {
    return res.json({message: "User isn't logged"})
}

const autorizar = (...roles) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const rolUsuario = "admin"
    if(roles.indexOf(rolUsuario)>=0) {
      return next()
    } else {
      res.json({message: "User isn't authorized"})
    }
  }
}


router.get("/", autenticar, autorizar("admin","cuentas"), handlerErrors.cacheo(controller.listar))
router.get("/:id", controller.detallar)
router.post("/", controller.insertar)
router.put("/:id", controller.modificar)
router.delete("/:id", controller.eliminar)




export {router}
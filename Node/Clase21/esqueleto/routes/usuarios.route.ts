import express = require("express")
import { Request, Response} from "express"
import { UsuariosController } from '../api/controllers/usuarios.controller'

const router = express.Router()
const controller = new UsuariosController()

router.get("/", controller.listar)
router.get("/:id", controller.detallar)
router.post("/", controller.insertar)
router.put("/:id", controller.modificar)
router.delete("/:id", controller.eliminar)

export {router}
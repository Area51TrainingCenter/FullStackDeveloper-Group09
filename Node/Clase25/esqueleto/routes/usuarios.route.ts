import express = require("express")
import { UsuariosController } from '../api/controllers/usuarios.controller'
import { handlerErrors } from "../handlers/errors.handler";
import { authentication } from "../api/policies/authentication.policy";
import { authorization } from "../api/policies/authorization.policy";
import { handlersImages } from "../handlers/images.handler";

const router = express.Router()
const controller = new UsuariosController()

router.get("/",authentication, authorization("admin"), handlerErrors.cacheo(controller.listar))
router.get("/:id", handlerErrors.cacheo(controller.detallar))
router.post("/login", handlerErrors.cacheo(controller.login))
router.post("/", handlersImages.upload(), handlersImages.save(), handlerErrors.cacheo(controller.insertar))
router.put("/:id", handlerErrors.cacheo(controller.modificar))
router.delete("/:id", handlerErrors.cacheo(controller.eliminar))
router.post("/new-access-token", handlerErrors.cacheo(controller.newAccessToken))
export {router}
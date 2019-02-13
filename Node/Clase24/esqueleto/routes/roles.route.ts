import express = require("express")
import { RolesController } from '../api/controllers/roles.controller'
import { handlerErrors } from "../handlers/errors.handler";

const router = express.Router()
const controller = new RolesController()

router.get("/", handlerErrors.cacheo(controller.listar))
router.get("/:id", handlerErrors.cacheo(controller.detallar))
router.post("/", handlerErrors.cacheo(controller.insertar))
router.put("/:id", handlerErrors.cacheo(controller.modificar))
router.delete("/:id", handlerErrors.cacheo(controller.eliminar))

export {router}
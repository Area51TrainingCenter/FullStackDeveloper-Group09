import express = require("express")
import { Request, Response } from "express"
import { IndexController } from '../api/controllers/index.controller'

const router = express.Router()
const controller = new IndexController()

router.get("/", controller.home)
router.get("/quienes", controller.quienes)
router.get("/servicios", controller.servicios)

export {router}
import express = require("express")
import { Request, Response } from "express"

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send("Home")
})

router.get("/quienes", (req: Request, res: Response) => {
  res
    .status(200)
    .type("text/html")
    .send("<h1>Quienes</h1>")
})

router.get("/servicios", (req: Request, res: Response) => {
  res
    .status(200)
    .type("text/html")
    .send("<h1>Servicios</h1>")
})

export {router}
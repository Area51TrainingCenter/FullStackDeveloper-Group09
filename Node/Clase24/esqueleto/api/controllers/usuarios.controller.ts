import { Request, Response} from "express"
import { BaseController } from "./base.controller";
import Usuario from "../models/usuario.model";
import { NextFunction } from "express-serve-static-core";
import { createRefreshToken, createAccessToken } from '../services/token.service';

export class UsuariosController extends BaseController {
  constructor() {
    super(Usuario)
  }

  async insertar(req: Request, res: Response, next: NextFunction) {
    const refreshToken = createRefreshToken()
    const datos = Object.assign({}, req.body)
    datos.refreshToken = refreshToken

    const nuevo = new Usuario(datos)
    let nuevoUsuario = await nuevo.save()
  
    res.json({status: 200, message: "User inserted"})
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const correo = req.body.correo.toLowerCase().trim()
    const contrasena = req.body.contrasena.trim()

    const usuario = await Usuario.findOne({correo, contrasena}).populate("rol")

    if(usuario) {
      const accessToken = createAccessToken(usuario._id, usuario.nombre, usuario.rol.nombre)
      const refreshToken = usuario.refreshToken

      res.json({status: 200, tokens: {refreshToken, accessToken}})
    } else {
      res
        .status(404)
        .json({
          status: 404,
          message: "Email and password are invalid"
        })
    }

  }
}
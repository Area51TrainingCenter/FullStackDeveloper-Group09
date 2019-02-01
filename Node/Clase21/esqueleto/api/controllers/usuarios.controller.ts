import { Request, Response} from "express"
import { BaseController } from "./base.controller";
import Usuario from "../models/usuario.model";

export class UsuariosController extends BaseController {
  constructor() {
    super(Usuario)
  }
}
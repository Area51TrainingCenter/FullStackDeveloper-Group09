import { Request, Response} from "express"
import { BaseController } from "./base.controller";

export class UsuariosController extends BaseController {
  constructor() {
    super("Usuarios")
  }
}
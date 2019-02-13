import { Request, Response} from "express"
import { NextFunction } from "connect";

export class BaseController {
  constructor(private modelo: any) {
    this.insertar = this.insertar.bind(this)
    this.listar = this.listar.bind(this)
    this.detallar = this.detallar.bind(this)
    this.modificar = this.modificar.bind(this)
    this.eliminar = this.eliminar.bind(this)
  }

  async listar(req: Request, res: Response, next: NextFunction) {
    let results = await this.modelo.find()
  
    res
      .json(results) 
  }

  async detallar(req: Request, res: Response, next: NextFunction) {
    const _id = req.params.id
    const result = await this.modelo.findOne({_id})
  
    res.json(result)
  }

  async insertar(req: Request, res: Response, next: NextFunction){
    const nuevo = new this.modelo(req.body)
    let nuevoUsuario = await nuevo.save()
  
    res.json({status: 200, resultado: nuevoUsuario})
  }

  async modificar(req: Request, res: Response, next: NextFunction){
    const body = req.body
    const _id = req.params.id

    await this.modelo.findOneAndUpdate({_id}, body)
  
    res.json({status: 200, resultado: body, message: `Registro actualizado: ${_id}`})
  }

  async eliminar(req: Request, res: Response, next: NextFunction) {
    const _id = req.params.id

    await this.modelo.remove({_id})
  
    res.json({status: 200, message: `Registro eliminado: ${_id}`})
  }
}
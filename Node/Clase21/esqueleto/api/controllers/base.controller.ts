import { Request, Response} from "express"

export class BaseController {
  constructor(private modelo: string) {
  }

  listar(req: Request, res: Response) {

    const usuarios = ["Carmen", "Pedro", "Alfonso", "Claudia"]
  
    res
      .json(usuarios) 
  }

  detallar(req: Request, res: Response) {
    const id = req.params.id
    const usuario = {nombre: `Brenda: ${id}`}
  
    res.json(usuario)
  }

  insertar(req: Request, res: Response){
    const usuarios = []
    const body = req.body
  
    usuarios.push(body)
  
    //res.end("ok")
    //res.json({status: 200, message: "Registro insertado"})
    res.json({status: 200, resultado: body})
  }

  modificar(req: Request, res: Response){
    const body = req.body
    const id = req.params.id
  
    res.json({status: 200, resultado: body, message: `Registro actualizado: ${id}`})
  }

  eliminar(req: Request, res: Response) {
    const id = req.params.id
  
    res.json({status: 200, message: `Registro eliminado: ${id}`})
  }
}
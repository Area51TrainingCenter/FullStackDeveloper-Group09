import { BaseController } from './base.controller';


/* const obj = new BaseController()
obj.ejecutar() */

export class Prueba extends BaseController {
  constructor() {
    super("Clientes")
    console.log("this de Prueba")
    console.log(this)
  }
}

const obj = new Prueba()
obj.ejecutar()
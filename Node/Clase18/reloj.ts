import { EventEmitter } from "events"
export class Reloj extends EventEmitter {

  iniciar(){
    setInterval(()=> {
      this.emit("hora actual", new Date())
    }, 1000)
  }
}
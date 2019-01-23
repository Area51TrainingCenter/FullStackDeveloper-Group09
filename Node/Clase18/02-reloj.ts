import { Reloj } from "./reloj"

const reloj = new Reloj()
reloj.iniciar()
reloj.on("hora actual", hora => console.log(hora))
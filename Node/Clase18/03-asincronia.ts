import fs = require("fs")
//import * as fs from "fs"

/* const contenido = fs.readFileSync("./lectura.txt",{encoding: "utf8"})
console.log(contenido)
console.log("fin de la lectura") */

fs.readFile("./lectura.txt", {encoding: "utf8"}, (err, contenido)=>{
  if(err) {
    console.log("error", err)
  } else {
    console.log(contenido)
  }
})
console.log("fin de lectura")
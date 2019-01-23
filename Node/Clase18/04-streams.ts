import fs = require("fs")

const lector = fs.createReadStream("./lectura.txt", {encoding: "utf8"})

const escritor = fs.createWriteStream("./escritura.txt")

/* lector.on("data", chuck => {
  console.log(chuck)
  escritor.write(chuck)
})

lector.on("end", ()=> {
  console.log("terminó")
}) */

lector.pipe(escritor)
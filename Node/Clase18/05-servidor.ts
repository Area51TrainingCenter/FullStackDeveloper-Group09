import http = require("http")

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse)=>{
/*   response.setHeader("content-type", "text/plain")
  response.statusCode = 200
  response.write("Te estoy enviando la info")
  response.end() */

  res.writeHead(200, {"content-type": "text/plain"})
/*   response.write("Te estoy enviando la info")
  response.end() */
  res.end("Te estoy enviando la info")
})

servidor.listen(3000, () => {
  console.log("Servidor ejecutándose en el puerto 3000")
})
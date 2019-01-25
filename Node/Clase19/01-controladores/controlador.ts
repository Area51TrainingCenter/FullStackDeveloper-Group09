const controlador = {
  home(req, res){
    res.setHeader("content-type", "text/html")
    res.statusCode = 200
    res.write(`
      <html>
        <head>
          <meta name="charset" content="utf8">
          <title>Home</title>
        </head>
        <body>
          <h1>Inicio</h1>
        </body>
      </html>
    `)
    res.end()
  },

  descargar(req, res){
    const lector = fs.createReadStream("./manual.pdf")
    res.setHeader("content-type", "application/pdf")
    lector.pipe(res)
  },

  redireccionar(req, res) {
    res.statusCode=302
    res.setHeader("Location", "https://google.com")
    res.end()
  },

  usuarios(req, res) {
    res.setHeader("content-type", "application/json")
    res.end(JSON.stringify(
      [
        {nombre: "Usuario1"},
        {nombre: "Usuario2"}
      ]
    ))
  }
}

export {controlador}
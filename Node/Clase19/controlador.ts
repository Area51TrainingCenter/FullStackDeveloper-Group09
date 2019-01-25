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

  },

  redireccionar(req, res) {

  },

  usuarios(req, res) {

  }
}

export {controlador}
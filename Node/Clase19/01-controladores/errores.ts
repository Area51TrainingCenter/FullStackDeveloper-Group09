const errores = {
  rutaNoEncontrada(req, res) {
    res.statusCode = 404
    res.setHeader("content-type", "text/plain")
    res.end("Ruta no encontrada")
  }
}

export {errores}
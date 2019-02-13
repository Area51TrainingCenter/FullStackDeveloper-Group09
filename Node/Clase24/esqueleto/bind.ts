const Estudiantes = {
  cantidad: 20,
  obtenerCantidadAlumnos: function(){
    return this.cantidad
  }
}

console.log("Alumnos", Estudiantes.obtenerCantidadAlumnos())

const cantidadAlumnos = Estudiantes.obtenerCantidadAlumnos.bind(Estudiantes)

console.log("Alumnos", cantidadAlumnos())

/* mongodb+srv://user_prueba:abcd123456789@cluster0-mgpgx.mongodb.net/admin */
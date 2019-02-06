const Estudiantes = {
  cantidad: 20,
  obtenerCantidadAlumnos: function(){
    return this.cantidad
  }
}

console.log("Alumnos", Estudiantes.obtenerCantidadAlumnos())

const cantidadAlumnos = Estudiantes.obtenerCantidadAlumnos.bind(Estudiantes)

console.log("Alumnos", cantidadAlumnos())


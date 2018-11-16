import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha = new Date()

  activo: boolean = true

  curso: string = "FullStack Javascript"
  descripcion: string

  anno: number = 2018

  listaCursos: any[] = []

  ngOnInit() {
    //var self = this
    setInterval(() => {
      this.activo = !this.activo
    }, 2000)
  }

  eliminar() {
    console.log("elemento eliminado")
  }

  ingreso(e) {
    this.curso = e.target.value
    console.log(e.target.value)
    //console.log("algo ingresò")
  }

  agregar() {
    if (this.curso.trim() != "") {
      const detalleCurso = { curso: this.curso, descripcion: this.descripcion, estado: true }
      this.listaCursos.unshift(detalleCurso)
      console.log(this.listaCursos)
      this.curso = ""
      this.descripcion = ""
    }
  }

  listarTodo() {
    for (const el of this.listaCursos) {
      console.log("elemento", el)
    }
  }

  borrar(indice: number) {
    this.listaCursos[indice].estado = false
    //this.listaCursos.splice(indice, 1)
  }
}

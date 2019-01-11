import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ICurso } from './curso.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, merge } from 'rxjs';
import { switchMap, startWith } from "rxjs/operators"
import { SeguridadService } from './seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaCursos: ICurso[] = []
  grupo: FormGroup
  grupoAE: FormGroup
  ejecutando: boolean = false
  obsInsertar = new Subject()

  constructor(private cursosService: CursosService, private seguridadService: SeguridadService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required)
    })
    this.grupoAE = new FormGroup({
      idCurso: new FormControl(null, Validators.required),
      //subtitulo: new FormControl("sub del curso"),
      titulo: new FormControl(null, Validators.required)
    })


    merge(this.obsInsertar)
      .pipe(
        startWith({}),
        switchMap(obs => {
          return this.cursosService.listar()
        })
      )
      .subscribe(
        (data: ICurso[]) => this.listaCursos = data
      )
  }

  /*   listar() {
      this.cursosService.listar()
        .subscribe(
          (data: ICurso[]) => this.listaCursos = data
        )
    } */

  insertar() {
    this.ejecutando = true
    const curso: ICurso = this.grupo.getRawValue()

    this.cursosService.insertar(curso)
      .subscribe(
        resp => {
          this.ejecutando = false
          this.obsInsertar.next()
          this.grupo.reset()
        }
      )
  }

  actualizar() {
    const curso: ICurso = this.grupoAE.getRawValue()

    this.cursosService.actualizar(curso)
      .subscribe(
        resp => {
          this.obsInsertar.next()
          this.grupoAE.reset()
        }
      )
  }

  eliminar() {
    const curso: ICurso = this.grupoAE.getRawValue()

    this.cursosService.eliminar(curso)
      .subscribe(
        resp => {
          this.obsInsertar.next()
          this.grupoAE.reset()
        }
      )
  }

  login() {
    this.seguridadService.login()
  }
}

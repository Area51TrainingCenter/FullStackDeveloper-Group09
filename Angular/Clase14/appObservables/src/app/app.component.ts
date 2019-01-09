import { Component } from '@angular/core';
import { Subject, merge, of, Observable } from 'rxjs';
import { switchMap, startWith } from "rxjs/operators"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	onPaginador = new Subject()
	onBuscador = new Subject()
	onOrdenador = new Subject()

	orden: string = "nombre"
	textoBuscado: string = ""
	pagina: number = 1
	tamanoPagina: number = 4

	usuarios: Array<{}> = [
		{ id: 1, nombre: "Javier", apellido: "Pedraza" },
		{ id: 2, nombre: "Ana", apellido: "Paredes" },
		{ id: 3, nombre: "Felipe", apellido: "Gamarra" },
		{ id: 4, nombre: "Kelly", apellido: "Reategui" },
		{ id: 5, nombre: "Julio", apellido: "Salas" },
		{ id: 6, nombre: "Luis", apellido: "Serra" },
		{ id: 7, nombre: "Enrique", apellido: "Munarriz" },
		{ id: 8, nombre: "Estela", apellido: "Mamani" },
		{ id: 9, nombre: "Freddy", apellido: "Paucar" },
		{ id: 10, nombre: "Alfonso", apellido: "Baella" }
	]

	usuariosAMostrar: Array<{}> = []

	llamadaAPIRest(pagina: number, textoBuscado: string, orden: string): Observable<any> {
		const lista = this.usuarios
			.filter((usuario: any) => usuario.apellido.indexOf(textoBuscado) > -1 || usuario.nombre.indexOf(textoBuscado) > -1)

			.sort((a, b) => {
				return a[orden] > b[orden] ? 1 : -1
			})

			.slice((pagina - 1) * this.tamanoPagina, (pagina - 1) * this.tamanoPagina + this.tamanoPagina)
		return of(lista)
	}

	ngOnInit() {
		merge(this.onPaginador, this.onBuscador, this.onOrdenador)
			.pipe(
				startWith({}),
				switchMap(
					() => {
						return this.llamadaAPIRest(this.pagina, this.textoBuscado, this.orden)
					}
				)
			)
			.subscribe(
				(data) => this.usuariosAMostrar = data
			)
		/* 	this.onPaginador.subscribe(
				() => console.log("Ocurrió un evento con el paginador")
			)
			this.onBuscador.subscribe(
				() => console.log("Ocurrió un evento con el buscador")
			)
			this.onOrdenador.subscribe(
				() => console.log("Ocurrió un evento con el ordenador")
			) */
	}

	buscador() {
		this.onBuscador.next()
	}

	paginador() {
		this.onPaginador.next()
	}

	ordenador() {
		this.onOrdenador.next()
	}

}

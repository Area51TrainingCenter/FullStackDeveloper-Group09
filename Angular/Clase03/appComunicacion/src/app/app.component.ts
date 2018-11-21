import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	cursos: string[] = []

	salvar(data: string) {
		this.cursos.push(data)
		console.log(this.cursos)
	}

	eliminar(indice: number) {
		this.cursos.splice(indice, 1)
	}
}

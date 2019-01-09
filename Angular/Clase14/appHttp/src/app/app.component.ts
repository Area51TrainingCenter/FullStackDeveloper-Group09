import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	cursos: Array<any> = []

	constructor(private cursosService: CursosService) { }

	ngOnInit() {
		this.cursosService.listar()
			.subscribe(
				data => this.cursos = data
			)
	}
}

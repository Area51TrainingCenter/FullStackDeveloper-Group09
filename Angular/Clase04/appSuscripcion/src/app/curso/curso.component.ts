import { Component, OnInit, Input } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
	selector: 'app-curso',
	templateUrl: './curso.component.html',
	styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
	@Input() nombre: string
	@Input("ind") indice: number

	constructor(private cursoService: CursoService) { }

	ngOnInit() {
	}

	borrar() {
		this.cursoService.eliminar(this.indice)
	}

}

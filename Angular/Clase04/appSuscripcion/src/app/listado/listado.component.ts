import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	items: string[]

	constructor(private cursoService: CursoService) {
		this.items = this.cursoService.listar()

		this.cursoService.onListado.subscribe(
			() => {
				this.items = this.cursoService.listar()
			}
		)
	}

	ngOnInit() {

	}

	borrar(indice: number) {

	}

}

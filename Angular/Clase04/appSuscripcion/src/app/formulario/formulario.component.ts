import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	curso: string = ""

	constructor(private cursoService: CursoService) {
	}

	ngOnInit() {
	}

	grabar() {
		this.cursoService.salvar(this.curso)
	}

}

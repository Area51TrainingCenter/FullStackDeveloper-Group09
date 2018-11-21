import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	curso: string = ""

	@Output() onNuevo = new EventEmitter()

	constructor() { }

	ngOnInit() {
	}

	grabar() {
		this.onNuevo.emit(this.curso)
	}

}

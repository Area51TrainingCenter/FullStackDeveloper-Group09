import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	@Input() items: string[]
	@Output() onBorrar = new EventEmitter()

	constructor() { }

	ngOnInit() {
	}

	borrar(indice: number) {
		this.onBorrar.emit(indice)
	}

}

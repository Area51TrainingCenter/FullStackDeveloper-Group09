import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Mensaje } from './modelos/mensaje';

@Injectable({
	providedIn: 'root'
})
export class MensajeriaService {

	onActualizacion = new Subject<Array<Mensaje>>()

	//private conversaciones: {msg: string, persona: string}[]

	private conversaciones: Array<Mensaje> = []

	constructor() { }

	//insertar({msg: string, persona: string}) {}
	insertar(dato: Mensaje): void {
		this.conversaciones.push(dato)

		this.onActualizacion.next(this.conversaciones)
	}

	listar(): Array<Mensaje> {
		return Object.assign([], this.conversaciones)
	}

}

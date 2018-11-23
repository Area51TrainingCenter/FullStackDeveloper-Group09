import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MensajeriaService {

	onActualizacion = new Subject<Array<{ msg: string, persona: string }>>()

	//private conversaciones: {msg: string, persona: string}[]

	private conversaciones: Array<{ msg: string, persona: string }> = []

	constructor() { }

	//insertar({msg: string, persona: string}) {}
	insertar(dato: { msg: string, persona: string }): void {
		this.conversaciones.push(dato)

		this.onActualizacion.next(this.conversaciones)
	}

	listar(): Array<{ msg: string, persona: string }> {
		return Object.assign([], this.conversaciones)
	}

}

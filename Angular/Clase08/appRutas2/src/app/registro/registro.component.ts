import { Component, OnInit } from '@angular/core';
import { CanDeactivateInterface } from '../canDeactivate.interface';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, CanDeactivateInterface {


	usuario: {} = { correo: "perico@gmail.com", contrasena: "123" }

	usuarioCopia: {}

	constructor() { }

	ngOnInit() {
		this.usuarioCopia = Object.assign({}, this.usuario)
	}

	canDeactivateComponent(): boolean {
		let modificado: boolean = false

		for (let prop in this.usuario) {
			if (this.usuario[prop] != this.usuarioCopia[prop]) {
				modificado = true
				break
			}
		}

		return modificado
	}





}

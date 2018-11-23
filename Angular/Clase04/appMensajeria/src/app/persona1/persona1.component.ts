import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';

@Component({
	selector: 'app-persona1',
	templateUrl: './persona1.component.html',
	styleUrls: ['./persona1.component.css']
})
export class Persona1Component implements OnInit {

	persona: string = "Persona 1"
	mensaje: string

	constructor(private mensajeriaService: MensajeriaService) { }

	ngOnInit() {
	}

	enviar() {
		if (this.mensaje.trim() != "") {
			this.mensajeriaService.insertar({ persona: this.persona, msg: this.mensaje })
			this.mensaje = ""
		}
	}

}

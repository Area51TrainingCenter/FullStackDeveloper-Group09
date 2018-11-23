import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';

@Component({
	selector: 'app-persona2',
	templateUrl: './persona2.component.html',
	styleUrls: ['./persona2.component.css']
})
export class Persona2Component implements OnInit {
	persona: string = "Persona 2"
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

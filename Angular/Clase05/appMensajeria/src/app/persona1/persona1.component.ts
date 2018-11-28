import { Component, OnInit, Input } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';
import { Mensaje } from '../modelos/mensaje';

@Component({
	selector: 'app-persona',
	templateUrl: './persona1.component.html',
	styleUrls: ['./persona1.component.css']
})
export class Persona1Component implements OnInit {

	@Input() persona: string
	mensaje: string

	constructor(private mensajeriaService: MensajeriaService) { }

	ngOnInit() {
	}

	enviar() {
		if (this.mensaje.trim() != "") {
			const mensaje: Mensaje = { msg: this.mensaje, persona: this.persona }
			this.mensajeriaService.insertar(mensaje)
			this.mensaje = ""
		}
	}

}

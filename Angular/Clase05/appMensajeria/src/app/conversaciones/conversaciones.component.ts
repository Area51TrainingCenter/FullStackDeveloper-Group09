import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';
import { Mensaje } from '../modelos/mensaje';

@Component({
	selector: 'app-conversaciones',
	templateUrl: './conversaciones.component.html',
	styleUrls: ['./conversaciones.component.css']
})
export class ConversacionesComponent implements OnInit {

	mensajes: Array<Mensaje>

	constructor(private mensajeriaService: MensajeriaService) { }

	ngOnInit() {
		this.mensajes = this.mensajeriaService.listar()

		this.mensajeriaService.onActualizacion.subscribe(
			(listaMensajes: Array<Mensaje>) => {
				this.mensajes = listaMensajes
			}
		)
	}

}

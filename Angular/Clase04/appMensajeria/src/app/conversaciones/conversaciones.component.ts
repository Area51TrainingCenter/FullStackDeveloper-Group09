import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';

@Component({
	selector: 'app-conversaciones',
	templateUrl: './conversaciones.component.html',
	styleUrls: ['./conversaciones.component.css']
})
export class ConversacionesComponent implements OnInit {

	mensajes: Array<{ msg: string, persona: string }>

	constructor(private mensajeriaService: MensajeriaService) { }

	ngOnInit() {
		this.mensajes = this.mensajeriaService.listar()

		this.mensajeriaService.onActualizacion.subscribe(
			(listaMensajes: Array<{ msg: string, persona: string }>) => {
				this.mensajes = listaMensajes
			}
		)
	}

}

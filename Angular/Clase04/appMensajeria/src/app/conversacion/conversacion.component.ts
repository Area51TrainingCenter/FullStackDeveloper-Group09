import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-conversacion',
	templateUrl: './conversacion.component.html',
	styleUrls: ['./conversacion.component.css']
})
export class ConversacionComponent implements OnInit {

	@Input() mensaje: { msg: string, persona: string }

	constructor() { }

	ngOnInit() {
	}

}

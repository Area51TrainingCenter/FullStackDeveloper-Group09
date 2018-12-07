import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	fecha = new Date()
	logueado: boolean = false

	constructor(private router: Router, private autenticacionService: AutenticacionService) { }

	ngOnInit() {
		//this.logueado = this.autenticacionService.estaLogueado()

		this.autenticacionService.onCambioEstado
			.subscribe(
				estado => this.logueado = estado
			)
	}

	irAlLogin() {
		this.autenticacionService.logout()
		//this.router.navigate([""])
		//this.router.navigate(["/cursos", "algebra"])
		// http://localhost:4200/cursos/algebra
	}
}

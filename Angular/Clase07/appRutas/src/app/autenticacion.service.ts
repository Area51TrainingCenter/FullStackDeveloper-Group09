import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	onCambioEstado = new Subject<boolean>()

	private usuario: string

	constructor(private router: Router) { }

	login() {
		this.usuario = "sergio"
		this.router.navigate(["/listado"])
		this.onCambioEstado.next(true)
	}

	logout() {
		this.usuario = null
		this.onCambioEstado.next(false)
		this.router.navigate(["/"])
	}

	estaLogueado(): boolean {
		if (this.usuario) {
			return true
		}
		return false
	}
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	private usuario: string

	constructor(private router: Router) { }

	login() {
		this.usuario = "sergio"
		this.router.navigate(["/listado"])
	}

	logout() {
		this.usuario = null
		this.router.navigate(["/"])
	}

	estaLogueado(): boolean {
		if (this.usuario) {
			return true
		}
		return false
	}
}

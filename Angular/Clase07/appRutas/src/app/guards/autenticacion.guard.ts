import { CanActivate } from "@angular/router"
import { AutenticacionService } from "../autenticacion.service";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class AutenticacionGuard implements CanActivate {
	constructor(private autenticacionService: AutenticacionService) { }

	canActivate(): boolean {
		return this.autenticacionService.estaLogueado()
	}
}
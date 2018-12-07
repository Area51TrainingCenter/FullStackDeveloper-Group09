import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../autenticacion.service';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionHijasGuard implements CanActivateChild {
	constructor(private autenticacionService: AutenticacionService) { }

	canActivateChild(): boolean {
		return this.autenticacionService.estaLogueado()
	}
}

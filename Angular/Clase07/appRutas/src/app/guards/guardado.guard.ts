import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import { CanDeactivateInterface } from '../canDeactivate.interface';

@Injectable({
	providedIn: 'root'
})
export class GuardadoGuard implements CanDeactivate<CanDeactivateInterface>{

	canDeactivateComponent(component): boolean {
		return true
	}
}

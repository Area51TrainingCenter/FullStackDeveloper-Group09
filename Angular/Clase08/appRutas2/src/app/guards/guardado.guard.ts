import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CanDeactivateInterface } from '../canDeactivate.interface';


@Injectable({
	providedIn: 'root'
})
export class GuardadoGuard implements CanDeactivate<CanDeactivateInterface>{

	canDeactivate(component: CanDeactivateInterface): boolean {
		if (component.canDeactivateComponent()) {
			if (confirm("Desea guardar la info?")) {
				return false
			}
			return true
		}
		return true
	}


}

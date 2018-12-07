import { Resolve } from "@angular/router"
import { delay } from "rxjs/operators";
import { Observable, of } from "rxjs";


export class UsuariosResolve implements Resolve<Array<string>> {
	resolve(): Observable<string[]> | Promise<string[]> | string[] {

		return of(["Sergio", "Carmen", "Pedro", "Cynthia", "Deisy", "Antonio"])
			.pipe(
				delay(6000)
			)


	}
}
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable(
	{
		providedIn: "root"
	}
)
export class CursosService {

	constructor(private http: HttpClient) { }

	listar(): Observable<Array<any>> {
		return this.http.get<Array<any>>("http://cursos.tibajodemanda.com/cursos")
	}
}
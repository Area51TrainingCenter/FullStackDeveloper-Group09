import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurso } from './curso.interface';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<ICurso[]> {

    return this.http.get<ICurso[]>(environment.apiRest + "/cursos")
  }

  insertar(curso: ICurso): Observable<any> {

    return this.http.post("http://cursos.tibajodemanda.com/cursos", curso)
  }

  actualizar(curso: ICurso): Observable<any> {


    return this.http.put("http://cursos.tibajodemanda.com/cursos/" + curso.idCurso, curso)

  }

  eliminar(curso: ICurso): Observable<any> {
    /*     const data = JSON.parse(sessionStorage.getItem("usuario"))

        const headers: HttpHeaders = new HttpHeaders({
          "authorization": "bearer " + data.accessToken
        }) */

    return this.http.delete("http://cursos.tibajodemanda.com/cursos/" + curso.idCurso)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  login() {
    of({ accessToken: "asksksksksk", refreshToken: "kdkdkdkddkdkdk" })
      .subscribe(
        data => sessionStorage.setItem("usuario", JSON.stringify(data))
      )
  }
}

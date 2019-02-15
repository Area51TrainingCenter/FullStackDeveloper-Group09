import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  listar() {
    const tokens:any = JSON.parse(sessionStorage.getItem("tokens"))
    const headers = {"authorization": "bearer " + tokens.accessToken }

    this.http.get("https://esqueleto.herokuapp.com/usuarios", {headers})
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

}

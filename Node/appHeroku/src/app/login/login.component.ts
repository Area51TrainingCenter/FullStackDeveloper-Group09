import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { pluck } from "rxjs/operators"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  grupo: FormGroup

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup(
      {
        correo: new FormControl(null, [Validators.required, Validators.email]),
        contrasena: new FormControl(null, Validators.required)
      }
    )
  }

  login() {
    this.http.post("https://esqueleto.herokuapp.com/usuarios/login", this.grupo.getRawValue())
    .pipe(
      pluck("tokens")
    )
    .subscribe(
      data => {
        sessionStorage.setItem("tokens", JSON.stringify(data))
        this.router.navigate(["/prueba"])
      },
      error => console.log(error)
    )

  }

}

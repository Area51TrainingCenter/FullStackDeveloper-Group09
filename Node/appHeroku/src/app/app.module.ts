import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PruebaComponent } from './prueba/prueba.component';

import {RouterModule, Route} from "@angular/router"
import {ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"

const rutas: Route[] = [
  {path: "login", component: LoginComponent},
  {path: "prueba", component: PruebaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

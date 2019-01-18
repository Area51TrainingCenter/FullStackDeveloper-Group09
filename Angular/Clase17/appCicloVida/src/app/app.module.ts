import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EstadoComponent } from './estado/estado.component';
import { Route, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

const rutas: Route[] = [
  {path: "", component: C1Component},
  {path: "c2", component: C2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EstadoComponent,
    C1Component,
    C2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

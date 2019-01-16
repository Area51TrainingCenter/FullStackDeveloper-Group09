import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { EdicionAutoresComponent } from './edicion-autores/edicion-autores.component';
import { ListadoEditorialesComponent } from './listado-editoriales/listado-editoriales.component';
import { EdicionEditorialesComponent } from './edicion-editoriales/edicion-editoriales.component';
import { ReducidorPipe } from './reducidor.pipe';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { AppRoutingModule } from './app.routing.module';
import { LibrosModule } from './libros/libros.module';





@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LoginComponent,
    ListadoAutoresComponent,
    EdicionAutoresComponent,
    ListadoEditorialesComponent,
    EdicionEditorialesComponent,
    ReducidorPipe,
    ConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

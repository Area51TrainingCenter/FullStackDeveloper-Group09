import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { EdicionComponent } from './edicion/edicion.component'
import { AppRoutingModule } from './app.routing.module';
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { UsuariosResolve } from './guards/usuarios.resolve';
import { FormsModule } from "@angular/forms"

@NgModule({
	declarations: [
		AppComponent,
		RegistroComponent,
		LoginComponent,
		EdicionComponent,
		ListadoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [UsuariosResolve],
	bootstrap: [AppComponent]
})
export class AppModule { }

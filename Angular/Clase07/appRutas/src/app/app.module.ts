import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { EdicionComponent } from './edicion/edicion.component'
import { AppRoutingModule } from './app.routing.module';


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
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

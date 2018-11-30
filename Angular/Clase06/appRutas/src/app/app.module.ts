import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Route } from '@angular/router';
import { EdicionComponent } from './edicion/edicion.component'

const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{ path: "registro", component: RegistroComponent },
	{ path: "edicion/:id", component: EdicionComponent },
	{ path: "listado", component: ListadoComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		RegistroComponent,
		ListadoComponent,
		LoginComponent,
		EdicionComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

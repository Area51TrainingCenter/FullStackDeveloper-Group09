import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";
import { EdicionComponent } from "./edicion/edicion.component";
import { ListadoComponent } from "./listado/listado.component";
import { Route, RouterModule } from "@angular/router";

const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{ path: "registro", component: RegistroComponent },
	{ path: "edicion/:id", component: EdicionComponent },
	{ path: "listado", component: ListadoComponent }
]

@NgModule({
	declarations: [

	],
	imports: [
		RouterModule.forRoot(rutas)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
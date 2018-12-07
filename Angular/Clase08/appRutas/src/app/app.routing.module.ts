import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";
import { EdicionComponent } from "./edicion/edicion.component";
import { ListadoComponent } from "./listado/listado.component";
import { Route, RouterModule } from "@angular/router";
import { AutenticacionGuard } from "./guards/autenticacion.guard";
import { UsuariosResolve } from "./guards/usuarios.resolve";
import { GuardadoGuard } from "./guards/guardado.guard";
import { compileBaseDefFromMetadata } from "@angular/compiler";
import { AutenticacionHijasGuard } from "./guards/autenticacion-hijas.guard";

const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{ path: "registro", component: RegistroComponent, canDeactivate: [GuardadoGuard] },

	{
		path: "usuarios", canActivateChild: [AutenticacionHijasGuard], children: [
			{ path: "", component: ListadoComponent },
			{ path: "edicion/:id", component: EdicionComponent }
		]
	}



	/*{
		path: "usuarios/listado", component: ListadoComponent, canActivate: [AutenticacionGuard], resolve: {
			nombreUsuario: UsuariosResolve
		}
	},

	{ path: "usuarios/edicion/:id", component: EdicionComponent }*/

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
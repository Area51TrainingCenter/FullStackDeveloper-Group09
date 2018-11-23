import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { CursoComponent } from './curso/curso.component';
import { CursoService } from './curso.service';

@NgModule({
	declarations: [
		AppComponent,
		FormularioComponent,
		ListadoComponent,
		CursoComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [CursoService],
	bootstrap: [AppComponent]
})
export class AppModule { }

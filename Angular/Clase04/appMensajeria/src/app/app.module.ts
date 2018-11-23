import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { Persona1Component } from './persona1/persona1.component';
import { Persona2Component } from './persona2/persona2.component';
import { ConversacionesComponent } from './conversaciones/conversaciones.component';
import { ConversacionComponent } from './conversacion/conversacion.component';

@NgModule({
	declarations: [
		AppComponent,
		Persona1Component,
		Persona2Component,
		ConversacionesComponent,
		ConversacionComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

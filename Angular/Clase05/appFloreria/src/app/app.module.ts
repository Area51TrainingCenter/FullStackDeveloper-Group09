import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { ListadoVentasComponent } from './listado-ventas/listado-ventas.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
	declarations: [
		AppComponent,
		ListadoVentasComponent,
		RegistroComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

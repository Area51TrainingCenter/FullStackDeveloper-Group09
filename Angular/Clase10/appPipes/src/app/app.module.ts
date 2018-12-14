import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReducidorPipe } from './reducidor.pipe';
import { BusquedaPipe } from './busqueda.pipe';
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		AppComponent,
		ReducidorPipe,
		BusquedaPipe
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

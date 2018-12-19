import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicaDirective } from './basica.directive';
import { HoverDirective } from './hover.directive';
import { ArrastreDirective } from './arrastre.directive';

@NgModule({
	declarations: [
		AppComponent,
		BasicaDirective,
		HoverDirective,
		ArrastreDirective
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatosComponent } from "./datos.component"

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DatosComponent]
})
export class AppModule { }

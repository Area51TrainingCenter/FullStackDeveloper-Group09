import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { EdicionLibrosComponent } from './edicion-libros/edicion-libros.component';

@NgModule({
  declarations: [
    ListadoLibrosComponent,
    EdicionLibrosComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { EdicionAutoresComponent } from './edicion-autores/edicion-autores.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { AutoresService } from './autores.service';

@NgModule({
  declarations: [
    ListadoAutoresComponent,
    EdicionAutoresComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    CompartidoModule
  ],
  providers: [
    AutoresService
  ]
})
export class AutoresModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialesRoutingModule } from './editoriales-routing.module';
import { ListadoEditorialesComponent } from './listado-editoriales/listado-editoriales.component';
import { EdicionEditorialesComponent } from './edicion-editoriales/edicion-editoriales.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [
    ListadoEditorialesComponent,
    EdicionEditorialesComponent
  ],
  imports: [
    CommonModule,
    EditorialesRoutingModule,
    CompartidoModule
  ]
})
export class EditorialesModule { }

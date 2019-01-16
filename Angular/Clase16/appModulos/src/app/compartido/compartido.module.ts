import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReducidorPipe } from './reducidor.pipe';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';

@NgModule({
  declarations: [
    ReducidorPipe,
    ConfirmacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReducidorPipe,
    ConfirmacionComponent
  ]
})
export class CompartidoModule { }

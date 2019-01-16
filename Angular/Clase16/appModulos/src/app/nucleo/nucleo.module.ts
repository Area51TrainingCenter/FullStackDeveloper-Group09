import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { LoginComponent } from './login/login.component';
import { CabeceraComponent } from './cabecera/cabecera.component';


@NgModule({
  declarations: [
    LoginComponent,
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  exports: [
    CabeceraComponent,
    NucleoRoutingModule
  ]
})
export class NucleoModule { }

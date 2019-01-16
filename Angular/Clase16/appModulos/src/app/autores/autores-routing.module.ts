import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { EdicionAutoresComponent } from './edicion-autores/edicion-autores.component';

const routes: Routes = [
  {path: "autores", children:[
    {path: "", component: ListadoAutoresComponent},
    {path: "edicion", component: EdicionAutoresComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { EdicionLibrosComponent } from './edicion-libros/edicion-libros.component';


const routes: Routes = [
  {path: "", children:[
    {path: "", component: ListadoLibrosComponent},
    {path: "edicion", component: EdicionLibrosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }

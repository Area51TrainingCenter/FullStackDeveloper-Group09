import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEditorialesComponent } from './listado-editoriales/listado-editoriales.component';
import { EdicionEditorialesComponent } from './edicion-editoriales/edicion-editoriales.component';

const routes: Routes = [
  {path: "editoriales", children:[
    {path: "", component: ListadoEditorialesComponent},
    {path: "edicion", component: EdicionEditorialesComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EditorialesRoutingModule { }

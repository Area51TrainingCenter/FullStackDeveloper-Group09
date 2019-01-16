import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListadoLibrosComponent } from "./listado-libros/listado-libros.component";
import { EdicionLibrosComponent } from "./edicion-libros/edicion-libros.component";
import { ListadoAutoresComponent } from "./listado-autores/listado-autores.component";
import { EdicionAutoresComponent } from "./edicion-autores/edicion-autores.component";
import { ListadoEditorialesComponent } from "./listado-editoriales/listado-editoriales.component";
import { EdicionEditorialesComponent } from "./edicion-editoriales/edicion-editoriales.component";

const rutas: Route[] = [
  {path: "", component: LoginComponent},
  {path: "libros", children:[
    {path: "", component: ListadoLibrosComponent},
    {path: "edicion", component: EdicionLibrosComponent}
  ]},
  {path: "autores", children:[
    {path: "", component: ListadoAutoresComponent},
    {path: "edicion", component: EdicionAutoresComponent}
  ]},
  {path: "editoriales", children:[
    {path: "", component: ListadoEditorialesComponent},
    {path: "edicion", component: EdicionEditorialesComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
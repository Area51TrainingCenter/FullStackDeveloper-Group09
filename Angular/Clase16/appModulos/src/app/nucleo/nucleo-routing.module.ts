import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutenticacionGuard } from '../servicios/autenticacion.guard';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "libros", loadChildren: "../libros/libros.module#LibrosModule", canLoad:[AutenticacionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }

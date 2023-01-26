import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarClienteComponent } from './Componentes/Clientes/borrar-cliente/borrar-cliente.component';
import { ClienteComponent } from './Componentes/Clientes/cliente/cliente.component';
import { ClientesComponent } from './Componentes/Clientes/clientes/clientes.component';
import { Error404Component } from './Componentes/error404/error404.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"clientes", component:ClientesComponent},
  {path:"cliente", component:ClienteComponent},
  {path:"**", component:Error404Component} //La ruta de error (asteriscos) tiene que estar en última posición
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

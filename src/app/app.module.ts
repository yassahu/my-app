import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './Componentes/Clientes/clientes/clientes.component';
import { ClienteComponent } from './Componentes/Clientes/cliente/cliente.component';
import { NuevoClienteComponent } from './Componentes/Clientes/nuevo-cliente/nuevo-cliente.component';
import { VerClienteComponent } from './Componentes/Clientes/ver-cliente/ver-cliente.component';
import { BorrarClienteComponent } from './Componentes/Clientes/borrar-cliente/borrar-cliente.component';
import { ModificarClienteComponent } from './Componentes/Clientes/modificar-cliente/modificar-cliente.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { Error404Component } from './Componentes/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    NuevoClienteComponent,
    VerClienteComponent,
    BorrarClienteComponent,
    ModificarClienteComponent,
    HeaderComponent,
    InicioComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

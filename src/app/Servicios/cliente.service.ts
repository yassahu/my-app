import { Injectable } from '@angular/core';
import { Cliente } from '../Modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  clientes:Array<Cliente>=
  [
    {
      id:1,
      nombre: 'Ana',
      cargo: 'Programadora' ,
      foto:'1.jpg',
      votos:0
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto:'2.jpg',
      votos:0
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
      foto:'3.jpg',
      votos:0
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador' ,
      foto:'4.jpg',
      votos:0
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
      foto:'5.jpg',
      votos:0
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
      foto:'6.jpg',
      votos:0
    }
  ]



  // //Explicación Salva 26-1-23
  // getClientes(){
  //   return this.clientes;
  // }

  // nuevoCliente(cliente: Cliente){
  //   this.clientes.push(cliente);
  // }
}

import { Component, OnInit } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  //variables
  nombre: string = "Mati Bueno";
  edad: number = 14;
  existeEdad: boolean = true;
  listProductos = ["mate", "Azucar", "Papel"];
  listObjectProductos: Producto[] = [
    {
      id: 1,
      nombre: 'Yerba'
    },
    {
      id: 2,
      nombre: 'Carne'
    },
    {
      id: 3,
      nombre: 'Frutas'
    },

  ]
  //metodos ciclo de vida de angular
  constructor() { }

  ngOnInit(): void {
  }

  //metodos comunes
  editarNombre(): string {
    this.nombre = "Jose";

    return this.nombre;
  }

}

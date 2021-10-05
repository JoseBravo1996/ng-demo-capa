
import { Component } from '@angular/core';

import { Frase } from './models/frase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // variables
  frase: Frase;
  title = 'Capacitacion Angular';
  numero = "1";
  mostrar: boolean = true;

 // metodos ciclo de vida de angular



  // frase: any = {
  //   mensaje: '¡El Doc esta vivo!',
  //   autor: 'Marty'
  // }

  constructor(){
    this.frase = new Frase();
    this.frase.nombre = "Jose";
    this.frase.numero = 11;
  }

  

  // Metodos 

  personajes: string[] = ['Marty', 'Doc', 'Biff'];
}

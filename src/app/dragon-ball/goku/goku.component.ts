import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.scss']
})
export class GokuComponent implements OnInit {

  mensajeDeGoku: string = '';
  recibirEnergia: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje(mensaje: string) {
    this.mensajeDeGoku = mensaje;
  }

  obtenerEnergia(msj: boolean){
    this.recibirEnergia = msj;
  }

}

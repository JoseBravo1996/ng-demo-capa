import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.scss']
})
export class GohanComponent implements OnInit {

  @Input() recibirMensajeDeGoku: string;
  @Output() energia = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarEnergia(msj: boolean){
    this.energia.emit(msj);
  }

}

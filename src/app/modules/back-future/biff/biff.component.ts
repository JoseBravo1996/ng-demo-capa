import { OfiTelegrafoService } from './../services/ofi-telegrafo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biff',
  templateUrl: './biff.component.html',
  styleUrls: ['./biff.component.scss']
})
export class BiffComponent implements OnInit {

  mensajeRecibido: string;

  constructor(private ofiTelegrafoService: OfiTelegrafoService) { }

  ngOnInit(): void {
    this.ofiTelegrafoService.send('Hola Gallina');
    this.ofiTelegrafoService.telegrafista$.subscribe(msj => this.mensajeRecibido = msj);
  }

}

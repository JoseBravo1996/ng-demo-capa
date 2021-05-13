import { Subscription } from 'rxjs';
import { OfiTelegrafoService } from './../services/ofi-telegrafo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doc-brown',
  templateUrl: './doc-brown.component.html',
  styleUrls: ['./doc-brown.component.scss']
})
export class DocBrownComponent implements OnInit, OnDestroy {

  messageToMarty: string;
  form: FormGroup;
  private suscription: Subscription;

  constructor(private formBuilder: FormBuilder, private ofiTelegrafoService: OfiTelegrafoService) {
   }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      controlDoc: new FormControl()
    })
  }

  sendMessage(event){
    this.ofiTelegrafoService.send(event);
    this.form.reset();
  }

  viewMessage() {
    this.suscription = this.ofiTelegrafoService.telegrafista$.subscribe(msj => this.messageToMarty = msj);
  }
}

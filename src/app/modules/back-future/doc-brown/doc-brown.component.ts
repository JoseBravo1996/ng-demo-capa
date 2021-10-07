import { of, Subscription } from 'rxjs';
import { OfiTelegrafoService } from './../services/ofi-telegrafo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs/operators'
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

    this.viewMessage();
  }

  sendMessage(event){
    this.ofiTelegrafoService.send(event);
    this.form.reset();
  }

  viewMessage() {
    var lista = of(1,2,3,4)
    var dato = lista.pipe(filter(x => { return x == 2}));
    dato.subscribe(x => console.log(x));
    // console.log(dato);
    this.suscription = this.ofiTelegrafoService.telegrafista$.pipe(map(x => this.messageToMarty = 'Hola ' + x )).subscribe(x => this.messageToMarty = x);
  }
}

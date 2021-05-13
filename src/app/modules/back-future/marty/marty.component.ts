import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OfiTelegrafoService } from '../services/ofi-telegrafo.service';

@Component({
  selector: 'app-marty',
  templateUrl: './marty.component.html',
  styleUrls: ['./marty.component.scss']
})
export class MartyComponent implements OnInit {

  messageToDoc: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private ofiTelegrafoService: OfiTelegrafoService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      control: new FormControl()
    })
  }

  sendMessage(event) {
    this.ofiTelegrafoService.send(event);
    this.form.reset();
  }

  viewMessage() {
    this.ofiTelegrafoService.telegrafista$.subscribe(msj => this.messageToDoc = msj);
  }

}

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

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      controlDoc: new FormControl()
    })
  }

  sendMessage(event){
  }

  viewMessage() {
  }
}

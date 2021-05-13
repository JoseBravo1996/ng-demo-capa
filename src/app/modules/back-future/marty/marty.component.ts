import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-marty',
  templateUrl: './marty.component.html',
  styleUrls: ['./marty.component.scss']
})
export class MartyComponent implements OnInit {

  messageToDoc: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      control: new FormControl()
    })
  }

  sendMessage(event){
  }

  viewMessage() {
  }

}

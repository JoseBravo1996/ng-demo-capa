import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public form: FormGroup;
  public sendChild: string;
  public sendChildOutput: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      control: new FormControl()
    });

    this.form.controls['control'].valueChanges.subscribe(
      data =>
      {
        this.sendChild = data;
      });
  }

  recibAlert(data: boolean){
    if(data){
      this.sendChildOutput = data;
    }
}

}

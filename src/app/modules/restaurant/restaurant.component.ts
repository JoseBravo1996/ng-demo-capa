import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      ingredientes: new FormControl('', Validators.required),
      preparacion: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
    });
  }

  Save(){
    console.log('guardar');
  }

}

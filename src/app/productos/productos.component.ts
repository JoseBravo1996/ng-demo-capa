import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public formProductos: FormGroup

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formProductos = this.formBuild.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      precio: [0, [Validators.required, Validators.min(0), Validators.max(100000)]],
      descripcion: ['', [Validators.required, Validators.maxLength(20)]],
      stock: [0, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  get f() { return this.formProductos.controls; }

}

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
      nombre: ['', [Validators.required, Validators.maxLength(40)]],
      precio: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
      descripcion: ['', [Validators.required, Validators.maxLength(50)]],
      stock: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  get f() { return this.formProductos.controls; }

}

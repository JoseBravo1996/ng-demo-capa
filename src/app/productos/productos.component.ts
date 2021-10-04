import { ProductosService } from './services/productos.service';
import { Producto } from './models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public formProductos: FormGroup
  public listProductos: Array<Producto> = [];

  constructor(private formBuild: FormBuilder, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.initForm();
  }

  initForm() {
    this.formProductos = this.formBuild.group({
      nombre: ['', [Validators.required, Validators.maxLength(40)]],
      precio: [''],
      descripcion: ['', [Validators.required, Validators.maxLength(50)]],
      stock: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  get f() { return this.formProductos.controls; }

  guardarProducto(){
      var producto = new Producto();
      producto.nombre = this.formProductos.get('nombre').value;
      producto.precio = this.formProductos.get('precio').value;
      producto.descripcion = this.formProductos.get('descripcion').value;
      producto.stock = this.formProductos.get('stock').value;

    this.productosService.crearProducto(producto).subscribe(res => {
      this.formProductos.reset();
      this.obtenerProductos();
    },
    error => {
      console.log('ocurrio  un error: ' + error);
    });
  }

  cancelarFormulario(){
    this.formProductos.reset();
  }

  obtenerProductos(){
    this.productosService.obtenerProductos().subscribe(res => {
        this.listProductos = res;
    });
  }
}

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';



@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }

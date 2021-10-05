import { EjemploComponent } from './ejemplo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EjemploComponent],
  imports: [
    CommonModule
  ],
  exports: [EjemploComponent]
})
export class EjemploModule { }

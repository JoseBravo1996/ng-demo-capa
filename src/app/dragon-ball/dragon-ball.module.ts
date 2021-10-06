import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GokuComponent } from './goku/goku.component';
import { GohanComponent } from './gohan/gohan.component';



@NgModule({
  declarations: [GokuComponent, GohanComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [GokuComponent, GohanComponent]
})
export class DragonBallModule { }

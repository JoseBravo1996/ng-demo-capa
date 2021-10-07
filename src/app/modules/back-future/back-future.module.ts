import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartyComponent } from './marty/marty.component';
import { DocBrownComponent } from './doc-brown/doc-brown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BiffComponent } from './biff/biff.component';



@NgModule({
  declarations: [MartyComponent, DocBrownComponent, BiffComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [MartyComponent, DocBrownComponent, BiffComponent]
})
export class BackFutureModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartyComponent } from './marty/marty.component';
import { DocBrownComponent } from './doc-brown/doc-brown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MartyComponent, DocBrownComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [MartyComponent, DocBrownComponent]
})
export class BackFutureModule { }

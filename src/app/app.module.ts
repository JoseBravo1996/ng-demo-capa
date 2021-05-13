import { ModulesModule } from './modules/modules.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BackFutureComponent } from './modules/back-future/back-future.component';
import { MartyComponent } from './modules/back-future/marty/marty.component';
import { DocBrownComponent } from './modules/back-future/doc-brown/doc-brown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModulesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

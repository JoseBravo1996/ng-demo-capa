import { DragonBallModule } from './dragon-ball/dragon-ball.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommunicationModule } from './communication/communication.module';
import { PersonasComponent } from './personas/personas.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommunicationModule,
    ReactiveFormsModule,
    DragonBallModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

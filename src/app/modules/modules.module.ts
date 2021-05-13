import { ModulesRoutingModule } from './modules-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackFutureModule } from './back-future/back-future.module';
import { BackFutureComponent } from './back-future/back-future.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BackFutureComponent, RestaurantComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    BackFutureModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ModulesModule { }

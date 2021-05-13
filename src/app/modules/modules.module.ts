import { ModulesRoutingModule } from './modules-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackFutureModule } from './back-future/back-future.module';
import { BackFutureComponent } from './back-future/back-future.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BackFutureComponent, RestaurantComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    BackFutureModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ModulesModule { }

import { ModulesRoutingModule } from './modules-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackFutureModule } from './back-future/back-future.module';
import { BackFutureComponent } from './back-future/back-future.component';



@NgModule({
  declarations: [BackFutureComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    BackFutureModule
  ]
})
export class ModulesModule { }

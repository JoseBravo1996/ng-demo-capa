import { RestaurantComponent } from './restaurant/restaurant.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackFutureComponent } from './back-future/back-future.component';

const routes: Routes = [
  {
    path:'future',
    component: BackFutureComponent
  },
  {
    path:'restaurant',
    component: RestaurantComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }

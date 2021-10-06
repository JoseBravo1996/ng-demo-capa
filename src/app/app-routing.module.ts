import { PersonasComponent } from './personas/personas.component';
import { ParentComponent } from './communication/parent/parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GokuComponent } from './dragon-ball/goku/goku.component';

const routes: Routes = [
  {
    path: '',
    component: GokuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

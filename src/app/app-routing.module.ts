import { ProductosComponent } from './productos/productos.component';
import { ParentComponent } from './communication/parent/parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'clase3',
    component: ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

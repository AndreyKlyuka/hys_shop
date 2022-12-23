import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductModule } from '@pages/product/product.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },

  {
    path: ':id',
    loadChildren: () => ProductModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

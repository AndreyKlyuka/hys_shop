import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    loadChildren: () =>
      import('./product-card.module').then((m) => m.ProductCardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCardRoutingModule {}

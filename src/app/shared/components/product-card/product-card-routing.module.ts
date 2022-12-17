import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardModule } from './product-card.module';

const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    loadChildren: () => ProductCardModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCardRoutingModule {}

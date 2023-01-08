import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '@pages/pages.component';
import { HomeComponent } from '@pages/home/home.component';
import { ProductsComponent } from '@pages/products/products.component';
import { CartComponent } from '@pages/cart/cart.component';
import { ProductComponent } from '@pages/product/product.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'products',
        pathMatch: 'full',
        component: ProductsComponent,
      },
      {
        path: 'products/cart',
        pathMatch: 'full',
        component: CartComponent,
      },
      {
        path: 'products/:id',
        pathMatch: 'full',
        component: ProductComponent,
      },
      {
        path: 'home',
        pathMatch: 'full',
        redirectTo: '',
      },

      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

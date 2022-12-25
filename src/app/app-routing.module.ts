import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { CartComponent } from '@pages/cart/cart.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/pages/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

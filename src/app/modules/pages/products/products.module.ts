import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from './products.service';
import { SharedModule } from '@shared/shared.module';
import { CartComponent } from '@pages/cart/cart.component';
import { HomeComponent } from '@pages/home/home.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
  providers: [ProductsService],
})
export class ProductsModule {}

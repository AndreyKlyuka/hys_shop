import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
<<<<<<< HEAD:src/app/modules/pages/products/products.module.ts

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [],
=======
import { ProductsComponent } from './products.component';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
  providers: [ProductsService],
>>>>>>> main:src/app/modules/products/products.module.ts
})
export class ProductsModule {}

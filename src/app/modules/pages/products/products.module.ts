import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [],


import { ProductsComponent } from './products.component';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
  providers: [ProductsService],


})
export class ProductsModule {}

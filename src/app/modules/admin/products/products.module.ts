import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LoginGuard } from '../../login/login.guard';

@NgModule({
  declarations: [],
  providers: [LoginGuard],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}

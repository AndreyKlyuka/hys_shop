import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { UahCurrencyPipe } from '../pipes/uah-currency.pipe';

@NgModule({
  declarations: [UahCurrencyPipe],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [],
  exports: [UahCurrencyPipe],
})
export class ProductsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardRoutingModule } from './product-card-routing.module';
import { UahCurrencyPipe } from '@pipes/uah-currency.pipe';

@NgModule({
  declarations: [UahCurrencyPipe],
  imports: [CommonModule, ProductCardRoutingModule],
  providers: [],
})
export class ProductCardModule {}

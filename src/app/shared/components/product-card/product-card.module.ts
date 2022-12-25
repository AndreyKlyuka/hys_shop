import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardRoutingModule } from './product-card-routing.module';
// import { UahCurrencyPipe } from '@shared/pipes/uah-currency.pipe';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductCardRoutingModule, SharedModule],
  providers: [],
})
export class ProductCardModule {}

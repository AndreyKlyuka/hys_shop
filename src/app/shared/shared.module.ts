import { NgModule } from '@angular/core';
import { UahCurrencyPipe } from '../pipes/uah-currency.pipe';
import { PriceColorDirective } from '../directives/price-color.directive';

@NgModule({
  declarations: [UahCurrencyPipe, PriceColorDirective],
  exports: [UahCurrencyPipe, PriceColorDirective],
})
export class SharedModule {}

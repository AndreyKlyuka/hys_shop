import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UahCurrencyPipe } from '@shared/pipes/uah-currency.pipe';
import { PriceColorDirective } from '@shared/directives/price-color.directive';
import { FooterComponent } from '@core/footer/footer.component';
import { HeaderComponent } from '@core/header/header.component';
import { CartTooltipComponent } from '@shared/components/cart-tooltip/cart-tooltip.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    UahCurrencyPipe,
    PriceColorDirective,
    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    UahCurrencyPipe,
    PriceColorDirective,
    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
  ],
})
export class SharedModule {}

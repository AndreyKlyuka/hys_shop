import { NgModule } from '@angular/core';
import { UahCurrencyPipe } from '@shared/pipes/uah-currency.pipe';
import { PriceColorDirective } from '@shared/directives/price-color.directive';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { HeaderComponent } from '@core/header/header.component';
import { FooterComponent } from '@core/footer/footer.component';
import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartTooltipComponent } from '@shared/components/cart-tooltip/cart-tooltip.component';

@NgModule({
  declarations: [
    UahCurrencyPipe,
    PriceColorDirective,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    CartTooltipComponent,
  ],
  exports: [
    UahCurrencyPipe,
    PriceColorDirective,
    ProductCardComponent,
    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
  ],
  imports: [NgClass, RouterLink, AsyncPipe, NgIf, NgForOf],
})
export class SharedModule {}

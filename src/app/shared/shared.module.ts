import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UahCurrencyPipe } from '@shared/pipes/uah-currency.pipe';
import { PriceColorDirective } from '@shared/directives/price-color.directive';
import { FooterComponent } from '@core/footer/footer.component';
import { HeaderComponent } from '@core/header/header.component';
import { CartTooltipComponent } from '@shared/components/cart-tooltip/cart-tooltip.component';
import { RouterLink } from '@angular/router';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';

@NgModule({
  declarations: [
    UahCurrencyPipe,
    PriceColorDirective,
    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
    AdminSidebarComponent,
    AdminTableComponent,
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    UahCurrencyPipe,
    PriceColorDirective,
    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
    AdminSidebarComponent,
    AdminTableComponent,
  ],
})
export class SharedModule {}

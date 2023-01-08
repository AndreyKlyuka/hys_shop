import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UahCurrencyPipe } from '@shared/pipes/uah-currency.pipe';
import { PriceColorDirective } from '@shared/directives/price-color.directive';
import { FooterComponent } from '@core/footer/footer.component';
import { HeaderComponent } from '@core/header/header.component';
import { CartTooltipComponent } from '@shared/components/cart-tooltip/cart-tooltip.component';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../modules/admin/sidebar/sidebar.component';
import { TableComponent } from '../modules/admin/table/table.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { CartComponent } from '@pages/cart/cart.component';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { ProductComponent } from '@pages/product/product.component';
import { HomeComponent } from '@pages/home/home.component';
import { ProductsHttpService } from '@pages/products/products-http.service';
import { ProductsComponent } from '@pages/products/products.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchFilterComponent } from '../modules/admin/search-filter/search-filter.component';
import { CountFilterComponent } from '../modules/admin/count-filter/count-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterService } from '../modules/admin/services/filter.service';

@NgModule({
  declarations: [
    UahCurrencyPipe,
    PriceColorDirective,
    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
    SidebarComponent,
    TableComponent,
    NotFoundComponent,
    CartComponent,
    ProductCardComponent,
    ProductComponent,
    HomeComponent,
    ProductsComponent,
    SpinnerLoaderComponent,
    SearchFilterComponent,
    CountFilterComponent,
  ],
  providers: [ProductsHttpService, FilterService],
  imports: [
    CommonModule,
    RouterLink,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [
    UahCurrencyPipe,
    PriceColorDirective,
    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
    SidebarComponent,
    TableComponent,
    NotFoundComponent,
    CartComponent,
    ProductCardComponent,
    ProductComponent,
    HomeComponent,
    ProductsComponent,
    SpinnerLoaderComponent,
    SearchFilterComponent,
    CountFilterComponent,
  ],
})
export class SharedModule {}

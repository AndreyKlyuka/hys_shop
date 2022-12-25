import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

import { ProductsComponent } from '@pages/products/products.component';
import { ProductsModule } from '@pages/products/products.module';
import { ProductsService } from '@pages/products/products.service';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { HeaderComponent } from '@core/header/header.component';
import { FooterComponent } from '@core/footer/footer.component';
import { HomeComponent } from '@pages/home/home.component';
import { ProductComponent } from '@pages/product/product.component';
import { CartComponent } from '@pages/cart/cart.component';
import { CartTooltipComponent } from '@shared/components/cart-tooltip/cart-tooltip.component';

import { NotFoundComponent } from '@pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    CartTooltipComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [ProductsService],
=======

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
>>>>>>> main
  bootstrap: [AppComponent],
})
export class AppModule {}

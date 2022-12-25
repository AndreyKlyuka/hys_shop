import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from '@pages/products/products.component';
import { ProductsService } from '@pages/products/products.service';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { HomeComponent } from '@pages/home/home.component';
import { ProductComponent } from '@pages/product/product.component';
import { CartComponent } from '@pages/cart/cart.component';

import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}

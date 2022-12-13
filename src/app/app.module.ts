import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from '@pages/products/products.component';
import { ProductsModule } from '@pages/products/products.module';
import { ProductsService } from '@pages/products/products.service';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { HeaderComponent } from '@core/header/header.component';
import { FooterComponent } from '@core/footer/footer.component';
import { HomeComponent } from '@pages/home/home.component';
import { ProductComponent } from '@pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

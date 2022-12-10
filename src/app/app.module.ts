import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './modules/products/products.component';
import { ProductsModule } from './modules/products/products.module';
import { ProductsService } from './modules/products/products.service';
import { ProductComponent } from './modules/product/product.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

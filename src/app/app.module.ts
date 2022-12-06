import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

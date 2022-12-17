import { Component } from '@angular/core';
import { ProductsService } from '@pages/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showCart = false;

  constructor(private productsService: ProductsService) {}

  public showCartTooltip() {
    this.showCart = true;
  }

  public closeCartTooltip() {
    this.showCart = false;
  }
}

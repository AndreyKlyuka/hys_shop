import { Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { CartService } from '@pages/cart/cart.service';
import { CartTooltipService } from '@shared/components/cart-tooltip/cart-tooltip.service';

@Component({
  selector: 'app-cart-tooltip',
  templateUrl: './cart-tooltip.component.html',
  styleUrls: ['./cart-tooltip.component.scss'],
})
export class CartTooltipComponent implements OnInit {
  cartProducts: IProduct[] = [];

  constructor(
    public cartService: CartService,
    public cartTooltipService: CartTooltipService
  ) {}

  ngOnInit() {
    this.cartService.getFromStorage();
    this.cartService.cartChanged$.subscribe((cartProducts) => {
      this.cartProducts = cartProducts;
    });
  }
}

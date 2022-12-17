import { Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { CartService } from '@pages/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartProducts: IProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getFromStorage();
    this.cartService.cartChanged$.subscribe((cartProducts) => {
      this.cartProducts = cartProducts;
    });
  }
}

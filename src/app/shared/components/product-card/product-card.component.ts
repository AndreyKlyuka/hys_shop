import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '@pages/cart/cart.service';
import { Subscription } from 'rxjs';
import { IProduct } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input()
  public productData!: IProduct;

  public inCart: boolean = false;

  private subscription!: Subscription;

  constructor(public cartService: CartService) {}

  public toggleProduct() {
    this.cartService.toggle(this.productData);
  }

  ngOnInit() {
    this.subscription = this.cartService.cartChanged$.subscribe((products) => {
      this.inCart = products.some(({ id }) => id === this.productData.id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

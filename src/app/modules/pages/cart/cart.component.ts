import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { CartService } from '@pages/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit, OnDestroy {
  public cartProducts: IProduct[] = [];

  private subscription!: Subscription;

  constructor(private cartService: CartService) {}

  public changeCount(product: IProduct, value: number) {
    console.log(product.id);
    console.log(value);

    this.cartService.setCount(product.id, value);
  }

  public getCount(product: IProduct): number {
    return this.cartService.getCount(product.id);
  }

  public getTotalPrice(cartProducts: IProduct[]) {
    return this.cartService.getTotalPrice(cartProducts);
  }

  ngOnInit(): void {
    this.cartService.getFromStorage();
    this.subscription = this.cartService.cartChanged$.subscribe(
      (cartProducts) => {
        this.cartProducts = cartProducts;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

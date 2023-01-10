import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { CartService } from '@pages/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  public cartProducts$!: Observable<IProduct[]>;

  constructor(private cartService: CartService) {}

  public changeCount(product: IProduct, value: number) {
    this.cartService.setCount(product.id!, value);
  }

  public getCount(product: IProduct): number {
    return this.cartService.getCount(product.id!);
  }

  public getTotalPrice(cartProducts: IProduct[]) {
    return this.cartService.getTotalPrice(cartProducts);
  }

  ngOnInit(): void {
    this.cartService.getFromStorage();
    this.cartProducts$ = this.cartService.cartChanged$;
  }
}

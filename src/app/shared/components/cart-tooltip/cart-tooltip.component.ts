import { Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { CartService } from '@pages/cart/cart.service';
import { CartTooltipService } from '@shared/components/cart-tooltip/cart-tooltip.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-tooltip',
  templateUrl: './cart-tooltip.component.html',
  styleUrls: ['./cart-tooltip.component.scss'],
})
export class CartTooltipComponent implements OnInit {
  cartProducts: IProduct[] = [];
  visible$!: Observable<boolean>;

  constructor(
    public cartService: CartService,
    public cartTooltipService: CartTooltipService
  ) {}

  public getTotalPrice(cartProducts: IProduct[]) {
    return this.cartService.getTotalPrice(cartProducts);
  }

  public getCount(product: IProduct): number {
    return this.cartService.getCount(product.id);
  }

  ngOnInit() {
    this.cartService.getFromStorage();
    this.cartService.cartChanged$.subscribe((cartProducts) => {
      this.cartProducts = cartProducts;
    });
    this.visible$ = this.cartTooltipService.getVisibleObs();
  }
}

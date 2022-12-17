import { Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';

@Component({
  selector: 'app-cart-tooltip',
  templateUrl: './cart-tooltip.component.html',
  styleUrls: ['./cart-tooltip.component.scss'],
})
export class CartTooltipComponent implements OnInit {
  cartProducts: IProduct[] = [];

  ngOnInit() {}
}

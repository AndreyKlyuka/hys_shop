import { Component, Input } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  public productData!: IProduct;
}

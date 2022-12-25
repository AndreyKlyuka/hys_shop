import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  public productData!: IProduct;
}

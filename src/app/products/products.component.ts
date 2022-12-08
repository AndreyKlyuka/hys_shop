import { Component, Input } from '@angular/core';
import { IProduct } from 'src/models/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input()
  public productData!: IProduct;
}

import { Component, Input } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input()
  public products: IProduct[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService.generateData(8);
  }
}

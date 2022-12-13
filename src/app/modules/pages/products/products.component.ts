import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input()
  public products: IProduct[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService.getProducts(8);
    this.productService.setData(this.products);
  }
}

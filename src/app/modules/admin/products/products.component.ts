import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@pages/products/products.service';
import { IProduct } from '@interfaces/product.interface';
import { TableOptions } from '@interfaces/table-options.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public allProducts: IProduct[] = [];
  public tableOptions: TableOptions = {
    filter: 'Price',
  };

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getFromStorage();
    this.productService.products$.subscribe(
      (products) => (this.allProducts = products.slice(0, 5))
    );
  }
}

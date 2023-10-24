import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from '@pages/products/products-http.service';
import { TableOptions } from '@interfaces/table-options.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // public allProducts$!: Observable<IProduct[]>;
  public tableOptions: TableOptions = {
    filterBy: 'Price',
    itemsOnPage: 5,
    itemType: {
      name: 'Products',
      oneItem: 'product',
    },
  };

  constructor(public productsService: ProductsHttpService) {}

  ngOnInit() {
    // this.allProducts$ = this.productsService.getAll<IProduct[]>();
  }
}

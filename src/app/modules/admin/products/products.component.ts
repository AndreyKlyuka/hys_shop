import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from '@pages/products/products-http.service';
import { IProduct } from '@interfaces/product.interface';
import { TableOptions } from '@interfaces/table-options.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public allProducts$!: Observable<IProduct[]>;
  public tableOptions: TableOptions = {
    filterBy: 'Price',
    itemsOnPage: 5,
  };

  constructor(private productsService: ProductsHttpService) {}

  ngOnInit() {
    this.allProducts$ = this.productsService.getAll<IProduct[]>();
  }
}

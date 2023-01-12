import { Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';

import { ProductsHttpService } from './products-http.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  public products$!: Observable<IProduct[]>;
  public page: number = 1;

  constructor(private productsService: ProductsHttpService) {}

  public loadMore() {
    this.page++;
  }

  ngOnInit() {
    this.products$ = this.productsService.getAll<IProduct[]>();

  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@pages/products/products.service';
import { IProduct } from '@interfaces/product.interface';
import { TableOptions } from '@interfaces/table-options.interface';
import { Observable, Subject } from 'rxjs';

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
  public loader$!: Subject<boolean>;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getFromStorage();
    this.allProducts$ = this.productService.products$;
    this.loader$ = this.productService.loader;
  }
}

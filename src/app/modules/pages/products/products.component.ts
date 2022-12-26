import { Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { ProductsService } from './products.service';
import { CartService } from '@pages/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products!: Observable<IProduct[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productsService.getFromStorage(8);
    this.cartService.getFromStorage();


    this.subscription = this.productsService.products$.subscribe(
      (products) => (this.products = products)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}

import { Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { ProductsService } from '@pages/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public topProducts!: IProduct[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getFromStorage();
    this.productsService.products$.subscribe(
      (products) =>
        (this.topProducts = products
          .filter((product) => product.price > 1000)
          .slice(0, 3))
    );
  }
}

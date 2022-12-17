import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productData!: IProduct;
  public productId: number = 0;

  private allProducts: IProduct[];

  constructor(private route: ActivatedRoute) {
    this.allProducts = JSON.parse(localStorage.getItem('products')!);
  }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.productData = this.allProducts.find(
      (el: IProduct) => el.id === this.productId
    )!;
  }
}

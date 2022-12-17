import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { ProductsService } from '@pages/products/products.service';
import { CartService } from '@pages/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  public productData!: IProduct;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  public toggleProduct() {
    this.productData.inCart = !this.productData.inCart;
    this.productsService.replaceProduct(this.productData.id, this.productData);
    this.cartService.add(this.productsService.getProducts());
  }

  ngOnInit(): void {}
}

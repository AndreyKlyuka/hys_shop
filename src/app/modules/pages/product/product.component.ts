import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@interfaces/product.interface';
import { ProductsHttpService } from '@pages/products/products-http.service';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '@pages/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  public productData$!: Observable<IProduct>;

  public productId: string = '';
  public dataSub!: Subscription;
  public cartSub!: Subscription;
  public inCart = false;

  public description: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsHttpService,
    public cartService: CartService
  ) {}

  public toggleDescription() {
    this.description = !this.description;
  }

  public toggleProduct(data: IProduct) {
    this.cartService.toggle(data);
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productData$ = this.productsService.getById<IProduct>(this.productId);
    this.dataSub = this.productData$.subscribe((data) => {
      this.cartSub = this.cartService.cartChanged$.subscribe((products) => {
        this.inCart = products.some(({ id }) => id === data.id);
      });
    });
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }
}

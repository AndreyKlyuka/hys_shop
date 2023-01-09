import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@interfaces/product.interface';
import { ProductsHttpService } from '@pages/products/products-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productData$!: Observable<IProduct>;
  public productId: string = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsHttpService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productData$ = this.productsService.getById<IProduct>(this.productId);
  }
}

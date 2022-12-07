import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: IProduct[] = this.generateData(8);

  constructor() {}

  ngOnInit() {
    this.products = this.generateData(8);
  }

  private generateData(length: number): IProduct[] {
    const data: IProduct[] = [];

    for (let i = 0; i < length; i++) {
      const product: IProduct = {
        id: i,
        name: Math.random().toString(36).slice(2, 8),
        price: +(Math.random() * 100).toFixed() * 10,
      };

      data.push(product);
    }
    return data;
  }
}

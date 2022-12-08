import { Injectable } from '@angular/core';
import { IProduct } from 'src/models/interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor() {}

  public generateData(length: number): IProduct[] {
    const data: IProduct[] = [];
    for (let i = 0; i < length; i++) {
      const product: IProduct = {
        id: i,
        name: Math.random().toString(36).slice(2, 10).replace(/[0-9]/g, ''),
        price: +Math.ceil(Math.random() * 1000 + Math.random() * 1000).toFixed(
          2
        ),
      };
      data.push(product);
    }
    return data;
  }
}

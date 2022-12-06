import { Injectable } from '@angular/core';
import { IData } from 'src/models/interfaces/data.interface';

@Injectable()
export class ProductsService {
  constructor() {}

  public generateData(length: number): IData[] {
    const data: IData[] = [];
    for (let i = 0; i < length; i++) {
      const product: IData = {
        id: i,
        name: Math.random().toString(36).slice(2, 10).replace(/[0-9]/g, ''),
        price: +(Math.random() * 100).toFixed() * 10,
      };
      data.push(product);
    }
    return data;
  }
}

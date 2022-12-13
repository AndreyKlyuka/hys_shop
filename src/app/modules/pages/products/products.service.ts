import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { ShareDataService } from '@shared/services/share-data.service';

@Injectable()
export class ProductsService extends ShareDataService<IProduct[]> {
  products!: IProduct[];

  constructor() {
    super();
  }

  public getProducts(length: number = 8, key: string = 'products'): IProduct[] {
    if (
      !localStorage.getItem(key) ||
      JSON.parse(localStorage.getItem(key)!).length != length
    ) {
      this.setToStorage(this.generateProducts(length), length);
    }
    return JSON.parse(localStorage.getItem(key)!);
  }

  private setToStorage(
    data: IProduct[],
    length: number = 8,
    key: string = 'products'
  ) {
    localStorage.setItem(key, JSON.stringify(this.generateProducts(length)));
  }

  private generateProducts(length: number): IProduct[] {
    const data: IProduct[] = [];
    for (let i = 0; i < length; i++) {
      const product: IProduct = {
        id: i + 1,
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

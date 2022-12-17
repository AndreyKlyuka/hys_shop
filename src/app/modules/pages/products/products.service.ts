import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor() {}

  public getProducts(length: number = 8, key: string = 'products'): IProduct[] {
    if (!localStorage.getItem(key)) {
      this.setToStorage(this.generateProducts(length));
    }
    return JSON.parse(localStorage.getItem(key)!);
  }

  public replaceProduct(productId: number, productToChange: IProduct) {
    const products = this.getProducts();
    products.splice(productId - 1, 1, productToChange);
    this.setToStorage(products);
  }

  private setToStorage(data: IProduct[], key: string = 'products') {
    localStorage.setItem(key, JSON.stringify(data));
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
        inCart: false,
      };
      data.push(product);
    }
    return data;
  }
}

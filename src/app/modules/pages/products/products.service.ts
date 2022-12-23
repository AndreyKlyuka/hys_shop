import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { BaseLocalStorageService } from '@shared/services/base-local-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsService {
  private productsSubject$ = new BehaviorSubject<IProduct[]>([]);

  public productsChanged$ = this.productsSubject$.asObservable();

  constructor(
    private baseLocalStorageService: BaseLocalStorageService<IProduct[]>
  ) {}

  public getFromStorage(length: number = 8, key: string = 'products') {
    if (!localStorage.getItem(key)) {
      this.setToStorage(this.generateProducts(length));
    }
    this.productsSubject$.next(this.baseLocalStorageService.get(key));
  }

  private setToStorage(value: IProduct[], key: string = 'products') {
    this.baseLocalStorageService.set(value, key);
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

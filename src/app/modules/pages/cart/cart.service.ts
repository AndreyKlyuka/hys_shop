import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';
import { BaseLocalStorageService } from '@shared/services/base-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  latestCarts: IProduct[] = [];

  private cartSubject$ = new BehaviorSubject<IProduct[]>(this.latestCarts);

  public cartChanged$ = this.cartSubject$.asObservable();

  constructor(
    private baseLocalStorageService: BaseLocalStorageService<IProduct[]>
  ) {}

  public add(products: IProduct[]) {
    this.latestCarts = products.filter((product) => product.inCart);
    this.cartSubject$.next(this.latestCarts);
    this.setToStorage(this.latestCarts);
  }

  public getFromStorage(key: string = 'cart') {
    this.cartSubject$.next(this.baseLocalStorageService.get(key));
  }

  private setToStorage(value: IProduct[], key: string = 'cart') {
    this.baseLocalStorageService.set(value, key);
  }
}

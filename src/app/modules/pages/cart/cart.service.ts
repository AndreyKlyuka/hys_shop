import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';
import { BaseLocalStorageService } from '@shared/services/base-local-storage.service';
import { ProductsService } from '@pages/products/products.service';
import { IProductCounter } from '@interfaces/product-counter.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public latestCarts: IProduct[] = [];

  private cartSubject$ = new BehaviorSubject<IProduct[]>([]);
  public cartChanged$ = this.cartSubject$.asObservable();

  constructor(
    private productsService: ProductsService,
    private productLocalStorageService: BaseLocalStorageService<IProduct[]>,
    private countLocalStorageService: BaseLocalStorageService<IProductCounter[]>
  ) {}

  public add(product: IProduct) {
    this.latestCarts.push(product);
    this.cartSubject$.next(this.latestCarts);
    this.setToStorage(this.latestCarts);
  }

  public delete(product: IProduct) {
    this.latestCarts = this.latestCarts.filter(
      (productInCart) => productInCart.id !== product.id
    );
    this.cartSubject$.next(this.latestCarts);
    this.setToStorage(this.latestCarts);
    this.setCount(product.id, 0);
  }

  public toggle(product: IProduct) {
    if (
      this.latestCarts.filter((prod) => prod.id === product.id).length === 0
    ) {
      this.add(product);
    } else {
      this.delete(product);
    }
  }

  public getTotalPrice(arr: IProduct[]) {
    return arr.reduce(
      (acc, { price, id }) => acc + price * this.getCount(id),
      0
    );
  }

  public getFromStorage(key: string = 'cart') {
    this.latestCarts =
      this.productLocalStorageService.get(key) !== null
        ? this.productLocalStorageService.get(key)
        : [];
    this.cartSubject$.next(this.latestCarts);
  }

  public setCount(productId: number, value: number) {
    let countersFromStorage: IProductCounter[] =
      this.countLocalStorageService.get('cartCount') || [];

    if (value === 0) {
      countersFromStorage = countersFromStorage.filter(
        (product) => +product.id !== productId
      );
    }
    const countPrev = this.getCount(productId);
    const countCurr = countPrev + value;

    const newElement: IProductCounter = {
      id: productId.toString(),
      count: countCurr,
    };
    if (countersFromStorage.length === 0) countersFromStorage.push(newElement);
    else if (
      countersFromStorage.findIndex((el) => +el.id === productId) === -1
    ) {
      countersFromStorage.push(newElement);
    } else {
      countersFromStorage[
        countersFromStorage.findIndex((el) => +el.id === productId)
      ] = newElement; // add properly data
    }
    if (value === 0) {
      countersFromStorage = countersFromStorage.filter(
        (product) => +product.id !== productId
      );
    }

    this.countLocalStorageService.set(countersFromStorage, 'cartCount');
  }

  public getCount(productId: number) {
    const counts: IProductCounter[] =
      this.countLocalStorageService.get('cartCount') || [];

    const count = (counts.find(
      (counterProduct) => +counterProduct.id === productId
    ) as IProductCounter) || { count: 1 };
    // console.log(count.count);
    return count.count;
  }

  private setToStorage(value: IProduct[], key: string = 'cart') {
    this.productLocalStorageService.set(value, key);
  }
}

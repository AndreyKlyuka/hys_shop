import { Injectable } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '@pages/products/products.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public idSortingDirection: boolean = true;
  public priceSortingDirection: boolean = true;
  public nameSortingDirection: boolean = true;

  private _searchText$ = new BehaviorSubject<string>('');

  private _priceInput$ = new BehaviorSubject<number>(0);
  private _priceSelectOption$ = new BehaviorSubject<string>('>');
  private _sortedProducts = new BehaviorSubject<IProduct[]>([]);
  public sortedProducts = this._sortedProducts.asObservable();

  public _pageCounter$ = new BehaviorSubject<number>(1);
  public pageCounter$ = this._pageCounter$.asObservable();

  constructor(private productsService: ProductsService) {}

  public getSortedBySearch() {
    let sortedProducts: IProduct[] = [];
    let search: string = '';
    let price: number = 0;
    let option: string = '';

    this.productsService.getFromStorage();
    this.productsService.products$.subscribe((products) => {
      sortedProducts = products;
    });
    this._searchText$.subscribe((value) => (search = value));
    this._priceInput$.subscribe((value) => (price = value));
    this._priceSelectOption$.subscribe((value) => (option = value));

    sortedProducts = sortedProducts.filter(
      (product) =>
        product.name.toLowerCase().search(search) != -1 ||
        product.id === +search ||
        product.price.toString().search(search) != -1
    );

    this._sortedProducts.next(sortedProducts);

    this.getSortedByOptions(this._sortedProducts, option, price);
  }

  public getSortedByOptions(
    prevSort: BehaviorSubject<IProduct[]>,
    option: string,
    price: number
  ) {
    let sortedProducts: IProduct[] = prevSort.value.filter((product) => {
      if (option === '<') {
        return product.price < price;
      }
      if (option === '>') {
        return product.price > price;
      } else {
        return product.price === price;
      }
    });
    this._sortedProducts.next(sortedProducts);
  }

  public sortById() {
    let sorted: IProduct[] = [];
    this.idSortingDirection = !this.idSortingDirection;

    this.sortedProducts.subscribe((products) => (sorted = products));
    this.idSortingDirection
      ? sorted.sort((a, b) => a.id - b.id)
      : sorted.sort((a, b) => b.id - a.id);
    this._sortedProducts.next(sorted);
  }

  public sortByName() {
    let sorted: IProduct[] = [];
    this.nameSortingDirection = !this.nameSortingDirection;

    this.sortedProducts.subscribe((products) => (sorted = products));
    this.nameSortingDirection
      ? sorted.sort((a, b) => a.name.localeCompare(b.name))
      : sorted.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    this._sortedProducts.next(sorted);
  }

  public sortByPrice() {
    let sorted: IProduct[] = [];
    this.priceSortingDirection = !this.priceSortingDirection;

    this.sortedProducts.subscribe((products) => (sorted = products));
    this.priceSortingDirection
      ? sorted.sort((a, b) => a.price - b.price)
      : sorted.sort((a, b) => b.price - a.price);
    this._sortedProducts.next(sorted);
  }

  filterByText(text: string) {
    this._searchText$.next(text);
    this._pageCounter$.next(1);
    this.getSortedBySearch();
  }

  filterByPrice(text: number) {
    this._priceInput$.next(text);
    this._pageCounter$.next(1);
    this.getSortedBySearch();
  }

  filterByOption(text: string) {
    this._priceSelectOption$.next(text);
    this._pageCounter$.next(1);
    this.getSortedBySearch();
  }
}

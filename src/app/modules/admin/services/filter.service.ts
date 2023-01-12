import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITableItem } from '@interfaces/table-item.interface';

@Injectable()
export class FilterService<T extends ITableItem> {
  public idSortingDirection: boolean = true;
  public priceSortingDirection: boolean = true;
  public nameSortingDirection: boolean = true;

  private _searchText$ = new BehaviorSubject<string>('');
  private _optionSortInput$ = new BehaviorSubject<string>('');
  private _priceSelectOption$ = new BehaviorSubject<string>('>');
  private _sortedItems = new BehaviorSubject<T[]>([]);
  public sortedItems = this._sortedItems.asObservable();

  public _pageCounter$ = new BehaviorSubject<number>(1);
  public pageCounter$ = this._pageCounter$.asObservable();

  constructor() {}

  public getSortedBySearch(items: T[]) {
    let sortedItems: T[];
    let search: string = '';
    let optionSort!: string | number;
    let option: string = '';

    sortedItems = items;

    this._searchText$.subscribe((value) => (search = value));
    this._optionSortInput$.subscribe(
      (value) => (optionSort = isNaN(+value) ? value.toLowerCase() : +value)
    );
    this._priceSelectOption$.subscribe((value) => (option = value));

    if (sortedItems[0].price) {
      sortedItems = sortedItems.filter(
        (items) =>
          items.name!.toLowerCase().search(search) != -1 ||
          items.id.search(search) != -1 ||
          items.price!.toString().search(search) != -1
      );
    }
    // console.log(sortedItems);

    if (sortedItems[0].username) {
      sortedItems = sortedItems.filter(
        (items) =>
          items.username!.toLowerCase().search(search) != -1 ||
          items.id.search(search) != -1 ||
          items.createdAt!.search(search) != -1
      );
    }
    this._sortedItems.next(sortedItems);

    this.getSortedByOptions(this._sortedItems, option, optionSort);
  }

  public getSortedByOptions(
    prevSort: BehaviorSubject<T[]>,
    option: string,
    optionSort: string | number
  ) {
    let sortedItems: T[] = prevSort.value;

    if (!!sortedItems.length && sortedItems[0].price) {
      sortedItems = sortedItems.filter((items) => {
        if (option === '<') {
          return items.price! < +optionSort;
        }
        if (option === '>') {
          return items.price! > +optionSort;
        } else {
          return items.price! === +optionSort;
        }
      });
    }

    if (!!sortedItems.length && sortedItems[0].username) {
      sortedItems = sortedItems.filter((items) => {
        if (option === '<') {
          return items.createdAt! < optionSort.toString();
        }
        if (option === '>') {
          return items.createdAt! > optionSort.toString();
        } else {
          return items.createdAt! === optionSort.toString();
        }
      });
    }
    this._sortedItems.next(sortedItems);
  }

  public sortById() {
    let sorted: T[] = [];
    this.idSortingDirection = !this.idSortingDirection;

    this.sortedItems.subscribe((items) => (sorted = items));
    this.idSortingDirection
      ? sorted.sort((a, b) => a.id.localeCompare(b.id))
      : sorted.sort((a, b) => a.id.localeCompare(b.id)).reverse();
    this._sortedItems.next(sorted);
  }

  public sortByName() {
    let sorted: T[] = [];
    this.nameSortingDirection = !this.nameSortingDirection;

    this.sortedItems.subscribe((items) => (sorted = items));
    if (sorted[0].name) {
      this.nameSortingDirection
        ? sorted.sort((a, b) => a.name.localeCompare(b.name))
        : sorted.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      this._sortedItems.next(sorted);
    }
    if (sorted[0].username) {
      this.nameSortingDirection
        ? sorted.sort((a, b) => a.username!.localeCompare(b.username!))
        : sorted
            .sort((a, b) => a.username!.localeCompare(b.username!))
            .reverse();
      this._sortedItems.next(sorted);
    }
  }

  public sortByPrice() {
    let sorted: T[] = [];
    this.priceSortingDirection = !this.priceSortingDirection;

    this.sortedItems.subscribe((items) => (sorted = items));

    if (sorted[0].price) {
      this.priceSortingDirection
        ? sorted.sort((a, b) => <number>a.price - <number>b.price)
        : sorted.sort((a, b) => <number>b.price - <number>a.price);
      this._sortedItems.next(sorted);
      return;
    }
    if (sorted[0].createdAt) {
      this.priceSortingDirection
        ? sorted.sort((a, b) => a.createdAt!.localeCompare(b.createdAt!))
        : sorted
            .sort((a, b) => a.createdAt!.localeCompare(b.createdAt!))
            .reverse();

      this._sortedItems.next(sorted);
    }
  }

  filterByText(text: string, data: T[]) {
    this._searchText$.next(text);
    this._pageCounter$.next(1);
    this.getSortedBySearch(data);
  }

  filterByPrice(text: string, data: T[]) {
    this._optionSortInput$.next(text);
    this._pageCounter$.next(1);
    this.getSortedBySearch(data);
  }

  filterByOption(text: string, data: T[]) {
    this._priceSelectOption$.next(text);
    this._pageCounter$.next(1);
    this.getSortedBySearch(data);
  }
}

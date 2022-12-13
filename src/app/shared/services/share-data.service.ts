import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService<T> {
  data!: T;

  constructor() {}

  public setData(data: T) {
    this.data = data;
  }

  public getData(): T {
    return this.data;
  }
}

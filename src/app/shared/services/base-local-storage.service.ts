import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseLocalStorageService<T> {
  constructor() {}

  public get(key: string) {
    if (!JSON.parse(localStorage.getItem(key)!)) this.createField(key, null);
    return JSON.parse(localStorage.getItem(key)!);
  }

  public set(value: T, key: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private createField(key: string, value: null) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

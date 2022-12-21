import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartTooltipService {
  isVisible$ = new BehaviorSubject(false).pipe(debounceTime(500));

  constructor() {}

  public open() {
    (this.isVisible$ as Subject<boolean>).next(true);
  }

  public close() {
    (this.isVisible$ as Subject<boolean>).next(false);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartTooltipService {
  public isVisible$ = new BehaviorSubject(false);

  constructor() {}

  public getVisibleObs(): Observable<boolean> {
    return this.isVisible$.asObservable().pipe(debounceTime(500));
  }

  public open() {
    this.isVisible$.next(true);
  }

  public close() {
    this.isVisible$.next(false);
  }
}

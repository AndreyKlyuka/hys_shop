import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPriceColor]',
})
export class PriceColorDirective {
  constructor(private el: ElementRef) {
    if (Math.random() < 0.5) this.el.nativeElement.style.color = 'red';
  }
}

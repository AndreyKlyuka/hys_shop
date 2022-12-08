import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[productPriceColor]',
})
export class PriceColorDirective {
  constructor(private el: ElementRef) {}

  @Input() set productPriceColor(condition: number) {
    if (condition > 500) this.el.nativeElement.style.color = 'pink';
    if (condition > 1000) this.el.nativeElement.style.color = 'crimson';
  }
}

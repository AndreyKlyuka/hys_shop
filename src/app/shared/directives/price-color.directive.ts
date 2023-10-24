import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[productPriceColor]',
})
export class PriceColorDirective {
  constructor(private el: ElementRef) {}

  @Input() set productPriceColor(condition: number) {
    if (condition > 1000) this.el.nativeElement.style.color = 'indianred';
    if (condition > 10000) this.el.nativeElement.style.color = 'crimson';
  }
}

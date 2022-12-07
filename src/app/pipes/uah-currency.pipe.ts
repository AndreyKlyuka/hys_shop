import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uahCurrency',
})
export class UahCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return '₴' + value.toFixed(2).toString();
  }
}

import { Component } from '@angular/core';
import { IData } from '../models/interfaces/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public products: IData[] = this.generateData(8);

  private generateData(length: number): IData[] {
    const data: IData[] = [];

    for (let i = 0; i < length; i++) {
      const product: IData = {
        id: i,
        name: Math.random().toString(36).slice(2, 8),
        price: +(Math.random() * 100).toFixed() * 10,
      };

      data.push(product);
    }
    return data;
  }
}

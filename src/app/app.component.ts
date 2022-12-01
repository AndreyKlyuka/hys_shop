import { Component } from '@angular/core';

interface IData {
  id: number;
  name: string;
  price: number;
}

function generateData(length: number): IData[] {
  return [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data: IData[] = [];
}

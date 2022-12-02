import { Component } from '@angular/core';
import { IData } from 'src/models/interfaces/data.interface';

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

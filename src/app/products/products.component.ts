import { Component, Input } from '@angular/core';
import { IData } from 'src/models/interfaces/data.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input()
  public productData!: IData;
}

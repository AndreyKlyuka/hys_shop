import { Component, Input } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { TableOptions } from '@interfaces/table-options.interface';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent {
  @Input()
  public products: IProduct[] = [];
  @Input()
  public options!: TableOptions;
}

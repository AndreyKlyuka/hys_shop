import { ITableItem } from '@interfaces/table-item.interface';

export interface INewProduct extends ITableItem {
  price: number;
  description: string;
}

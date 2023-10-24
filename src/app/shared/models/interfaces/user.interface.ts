import { ITableItem } from '@interfaces/table-item.interface';

export interface IUser extends ITableItem {
  createdAt: string;
  description?: string;
}

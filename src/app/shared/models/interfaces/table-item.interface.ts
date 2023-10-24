export interface ITableItem {
  id: string;
  username?: string;
  name: string;
  price?: number;
  createdAt?: string;
  extraInfo?: {
    image: string;
  };
  description?: string;
}

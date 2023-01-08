import { Injectable } from '@angular/core';
import { BaseHttpService } from '@shared/services/base-http.service';

@Injectable()
export class ProductsHttpService extends BaseHttpService {
  override path = 'products';
}

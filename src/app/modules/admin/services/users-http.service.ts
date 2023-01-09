import { Injectable } from '@angular/core';
import { BaseHttpService } from '@shared/services/base-http.service';

@Injectable()
export class UsersHttpService extends BaseHttpService {
  override path = 'users';
}

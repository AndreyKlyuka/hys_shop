import { Component } from '@angular/core';
import { TableOptions } from '@interfaces/table-options.interface';
import { UsersHttpService } from '../services/users-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public tableOptions: TableOptions = {
    filterBy: 'Created',
    itemsOnPage: 5,
    itemType: {
      name: 'Users',
      oneItem: 'user',
    },
  };

  constructor(public usersService: UsersHttpService) {}
}

import { Component } from '@angular/core';
import { TableOptions } from '@interfaces/table-options.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public tableOptions: TableOptions = {
    filter: 'Created',
  };
}

import { Component, Input } from '@angular/core';
import { BaseLocalStorageService } from '@shared/services/base-local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input()
  public page: string = '';

  constructor(
    private authLocalStorageService: BaseLocalStorageService<string>
  ) {}

  public logout() {
    this.authLocalStorageService.set('', 'token');
  }
}

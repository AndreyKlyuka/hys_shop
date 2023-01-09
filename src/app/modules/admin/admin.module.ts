import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '@shared/shared.module';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from '../login/login.guard';
import { UsersHttpService } from './services/users-http.service';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    ProductsComponent,
    ModalComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule],
  providers: [UsersHttpService, LoginGuard],
  exports: [],
})
export class AdminModule {}

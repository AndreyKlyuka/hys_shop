import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '@shared/shared.module';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    ProductsComponent,
    LoginComponent,
    ModalComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule],
  providers: [],
  exports: [],
})
export class AdminModule {}

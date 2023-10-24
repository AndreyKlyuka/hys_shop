import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [ForbiddenComponent, NotFoundComponent, UnauthorizedComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}

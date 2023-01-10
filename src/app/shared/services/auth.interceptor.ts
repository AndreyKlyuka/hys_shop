import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '@shared/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modules/admin/modal/modal.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private modal: MatDialog
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}` || ''),
    });
    return next.handle(authRequest).pipe(
      tap({
        next: (next) => {},
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.showModal(
                'You are not authorized! But it`s easy to solve :)'
              );
            }
            if (error.status === 404) {
              this.router.navigateByUrl('error/404');
            }
            if (error.status === 403) {
              this.router.navigateByUrl('error/403');
            }
          }
        },
      })
    );
  }

  showModal(title: string) {
    let addDialog = this.modal.open(ModalComponent, {
      height: '350px',
      width: '600px',
      data: {
        title: title,
        login: true,
      },
    });

    addDialog.afterClosed().subscribe((data) => {
      this.router.navigateByUrl('error/401');
    });
  }
}

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

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

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
            console.log(error);
            if (error.status === 401) {
              console.log(error.message);

              this.router.navigateByUrl('/401');
            }
            if (error.status === 404) {
              console.log(error.message);

              this.router.navigateByUrl('/404');
            }
            if (error.status === 403) {
              console.log(error.message);
              this.router.navigateByUrl('/403');
            }
          }
        },
      })
    );

    // return next.handle(request).pipe(
    //   tap({
    //     next: (next) => {},
    //     error: (error) => {
    //       if (error instanceof HttpErrorResponse) {
    //         console.log(error);
    //         if (error.status === 401) {
    //           console.log(error.message);
    //
    //           this.router.navigateByUrl('/401');
    //         }
    //         if (error.status === 404) {
    //           console.log(error.message);
    //
    //           this.router.navigateByUrl('/404');
    //         }
    //         if (error.status === 403) {
    //           console.log(error.message);
    //           this.router.navigateByUrl('/403');
    //         }
    //       }
    //     },
    //   })
    // );
  }
}

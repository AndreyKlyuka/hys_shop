import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (!this.authService.getToken()) {
      this.router.navigateByUrl('admin');
      return false;
    } else {
      return true;
    }
  }
}

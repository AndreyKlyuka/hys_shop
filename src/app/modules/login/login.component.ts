import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  form: FormGroup = this.fb.group({
    username: '',
    password: '',
  });

  public auth() {
    this.authService
      .auth<{ access_token: string }>(this.form.getRawValue())
      .subscribe({
        next: (response) => {
          this.authService.setToken(response.access_token);
          this.router.navigateByUrl('admin/users');
        },
        error: (error) => {
          if (error.error.statusCode === 401) {
            this.form.patchValue({ username: '', password: '' });
          } else {
            throwError(() => error.message());
          }
        },
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseLocalStorageService } from '@shared/services/base-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'https://hys-fe-course-api.vercel.app/auth/login';

  constructor(
    private http: HttpClient,
    private authLocalStorageService: BaseLocalStorageService<string>
  ) {}

  setToken(token: string) {
    this.authLocalStorageService.set(token, 'token');
  }

  getToken() {
    return this.authLocalStorageService.get('token');
  }

  auth<T>(data: object) {
    return this.http.post<T>(this.URL, data);
  }
}

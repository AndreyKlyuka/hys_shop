import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  protected path = '';
  private URL = 'https://hys-fe-course-api.vercel.app/';

  authHeaders = new HttpHeaders({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJmMjc4ODU3Ny1lMTllLTQzMGUtYTAyZC1lNWU0MTNhMDdkZGIiLCJ1c2VybmFtZSI6ImRyYWdhbm92IiwicGFzc3dvcmQiOiIkMmIkMTAkMUpQRWhWNzd6YnhWalR5UVhySkpUdXI4Z3M2TVlTbTRNTGZqWElFRU1tMDc1SU5YUlg2Vk8iLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTI4VDA5OjI1OjE4LjE3MFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTI4VDA5OjI1OjE4LjE3MFoiLCJpYXQiOjE2NzIzODYxMjksImV4cCI6MTY3MjQ3MjUyOX0.ArkYEq25jMrOUi8iTo9aBoeAlSykAr6vbsYriJlYT7o`,
  });

  constructor(private http: HttpClient) {}

  public getAll<T>(): Observable<T> {
    return this.http
      .get<T>(this.URL + this.path)
      .pipe(catchError(this.errorHandler));
  }

  public getById<T>(id: string): Observable<T> {
    return this.http
      .get<T>(this.URL + this.path + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  public create<T>(data: T): Observable<T> {
    return this.http
      .post<T>(this.URL + this.path, data)
      .pipe(catchError(this.errorHandler));
  }

  public update<T>(id: string, data: T): Observable<T> {
    return this.http
      .put<T>(this.URL + this.path + '/' + id, data)
      .pipe(catchError(this.errorHandler));
  }

  public delete(id: string): Observable<Object> {
    return this.http
      .delete(this.URL + this.path + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Response) {
    return throwError(() => new Error('Something went wrong...'));
  }
}

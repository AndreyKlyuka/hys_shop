import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  protected path = '';
  private URL = 'https://hys-fe-course-api.vercel.app/';

  constructor(private http: HttpClient, private modal: MatDialog) {}

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

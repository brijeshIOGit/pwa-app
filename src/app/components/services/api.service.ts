import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getUserList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map(
        (response: Response) => {
          return response;
        }));


  }
  getPostList() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(
        (response: Response) => {
          return response;
        }));

  }

  handleError(err) {

    console.log(err);

    return of({ ...err.error, isError: true });

  }
}

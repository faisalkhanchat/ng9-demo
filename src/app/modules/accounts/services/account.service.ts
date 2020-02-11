import { Injectable, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ADMIN, LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, VERIFY_TOKEN } from 'src/app/constants/urls';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http/http.service';


@Injectable()

export class AccountService {
  private apiUrl: string;
  private apiLocalUrl: string;
  constructor(
    private _http: HttpService

  ) {
    // this.apiUrl = environment.url;
    // this.apiLocalUrl = environment.API_LOCAL_PATH;
  }




  signup(data) {
    return this._http.post(`${this.apiUrl}`, data).pipe(catchError(this.handleError));
  }

  login(data) {
    return this._http.post(ADMIN + LOGIN , data);
  }

  forgot(data) {
    return this._http.post(ADMIN + FORGOT_PASSWORD, data).pipe(catchError(this.handleError));
  }

  countries() {
    return this._http.get(`${this.apiLocalUrl}/Country.json`).pipe(catchError(this.handleError));
  }

  resetPassword(data) {
    return this._http.post(ADMIN + RESET_PASSWORD, data).pipe(catchError(this.handleError));
  }

  // verifyToken(data) {
  //   return this._http.post(ADMIN + VERIFY_TOKEN, data).pipe(catchError(this.handleError));
  // }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      console.log(error);
      // tslint:disable-next-line: no-string-literal
      const status = error['statusCode'];
      // Server-side errors
      // errorMessage = `Error Code: ${status}\nMessage: ${error.message}`;
      errorMessage = `Message: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }


}

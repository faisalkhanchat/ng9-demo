
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ACCOUNT } from 'src/app/constants/routes';
import { ADMIN, LOGOUT } from 'src/app/constants/urls';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public adminDetail: any;
  notificationCount = 0;
  public tabSelected = new BehaviorSubject({tab: 'All', path: '/menus/all/all-categories'}
  );
  constructor(
    private _router: Router,
    private _http: HttpService,
  ) { }

  setToken(token: string) {
    return localStorage.setItem('paradise_session_token', token);
  }

  get token() {
    return localStorage.getItem('paradise_session_token');
  }

  get username() {
    return localStorage.getItem('username');
  }

  get authentication() {
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }

  loginSuccessfully(response: any) {
    // this.setToken(response.data.name);
    this.setToken(response);
    this._router.navigateByUrl('/');
  }

  // logOut(windowReload: any) {
  //     const quickLogout = {
  //     };
  // }

  logOutConfirm(isRedirect: boolean = true) {
    return this._http.put(ADMIN + LOGOUT).pipe(catchError(this.handleError));
  }

  /*   OTHER FUNCTIONS   */

  trim(data) {
    for (const item in data) {
      if (typeof data[item] === 'string') {
        data[item] = data[item].trim();
      }
    }
    return data;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  clearStorage() {
    localStorage.removeItem('paradise_session_token');
    // localStorage.removeItem('username');
    sessionStorage.clear();
    this._router.navigateByUrl(`/${ACCOUNT}`);
  }

  setTabClicked(tab) {
    console.log(tab);
    this.tabSelected.next(tab);
  }

}

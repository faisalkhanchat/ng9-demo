import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastService } from 'src/app/components/toast-notification/toast.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private _toast: ToastService) { }

  post(url: string, body: any): Observable<any> {
    return this.http.post(environment.API_BASE_PATH + url, body);
  }

  get(url: string, parameter?: any): Observable<any> {
    return this.http.get(environment.API_BASE_PATH + url, { params: parameter })
    .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, true)));
  }

  getLocal(url: string, parameter?: any): Observable<any> {
    return this.http.get(environment.API_LOCAL_PATH + url, { params: parameter })
    .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, true)));
  }

  patch(url: string, body?: any): Observable<any> {
    return this.http.patch(environment.API_BASE_PATH + url, body)
    .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, true)));
  }

  put(url: string, body?: any): Observable<any> {
    return this.http.put(environment.API_BASE_PATH + url, body);
    // .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, true)));
  }

  delete(url: string, query?: any): Observable<any> {
    return this.http.delete(environment.API_BASE_PATH + url, query)
    .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, true)));
  }

  getBlobRequest(url: string, queryParams?: any): Observable<any> {
    return this.http.get(environment.API_BASE_PATH + url, { params: queryParams})
    .pipe(catchError((err: HttpErrorResponse) => this.handleError(err, true)));
  }



    // ------------------------------------------------------//
    private handleError(err: HttpErrorResponse, toastView?: boolean) {
      /*--toast view by condition--*/
      if (toastView) {
        if (err.message) {
          console.log(err.message);
          this._toast.error(err.message);
        }
      }
      return throwError(err);
    }
  


}
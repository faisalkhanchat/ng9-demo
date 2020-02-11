import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpService } from './../http/http.service';
import { StorageService } from '../storage/storage.service';
import { AuthService } from './auth/auth.service';
import { LoaderService } from './../../components/loader/loader.service';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { VALIDATION_MESSAGES } from 'src/app/constants/messages';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  {

  constructor(
    private _http: HttpService,
    private _storage: StorageService,
    private _auth: AuthService,
    private _loader: LoaderService,
    private _toast: ToastService,
    private router: Router
  ) {
    console.log("Inside interceptor");

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loader.show(); // Loader show
    const authRequest = req.clone({ setHeaders: this._auth.authorization(), withCredentials: false });
    // console.log(authRequest);
    return next.handle(authRequest).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this._loader.hide(); // Loader hide
      }
      return event;
    }), catchError((error: HttpErrorResponse) => {
      this.errorState(error, error.error);
      return throwError(error.error);
    }),
      finalize(() => {
        this._loader.hide(); // Loader hide
      })
    );
  }



  errorState(error: any, data: any) {
    console.log(error);
    this._loader.hide(); // Loader hide
    if (error.status === 0) {
      if (!navigator.onLine) {
        this._toast.error(VALIDATION_MESSAGES.NO_INTERNET);
      } else {
        this._toast.error(VALIDATION_MESSAGES.NOT_CONNECT_SERVER);
      }
    } else if (error.status === 401) {
      this._storage.clearStorage();
      this.router.navigateByUrl('/account/login');
    }
    // else {
    //   this._toast.error(VALIDATION_MESSAGES.OOPS);
    // }
  }


}

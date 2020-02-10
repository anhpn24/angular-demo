import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  constructor(public authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    });

    const clone = req.clone({
      headers: reqHeaders,
      params: null
    });

    return next.handle(clone).pipe(
      catchError(this.handleError),
      retry(1)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 403) {
      console.log('403');

      // TODO: return Refresh Token here and hold other calls
    }
    return throwError(error);
  }
}


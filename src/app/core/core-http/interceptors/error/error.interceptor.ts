import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from 'src/app/core/core-notification/services/snackbar/snackbar.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        switch (error.status) {
          case 0:
            this.injector.get(SnackbarService).error('APP_ERRORS.UNAVAILABLE');
        }
        return throwError(error);
      })
    );
  }
}

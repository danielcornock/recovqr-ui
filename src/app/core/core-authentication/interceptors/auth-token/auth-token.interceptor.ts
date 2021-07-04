import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthQuery } from '../../store/auth.query';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authQuery: AuthQuery) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authQuery.getAuthToken().pipe(
      mergeMap((token) => {
        request = request.clone({
          setHeaders: {
            Authorization: token
          }
        });

        return next.handle(request);
      })
    );
  }
}

import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpLoadingService } from '../../services/http-loading/http-loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private httpLoadingService: HttpLoadingService) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.httpLoadingService.setLoading(true, request.url);

    return next.handle(request).pipe(
      finalize(() => {
        this.httpLoadingService.setLoading(false, request.url);
      })
    );
  }
}

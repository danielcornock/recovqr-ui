import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { ApiUrlProvider } from './providers/api-url.provider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiUrlProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreHttpModule { }

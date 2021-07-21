import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthTokenInterceptor } from './interceptors/auth-token/auth-token.interceptor';
import { AuthStore } from './store/auth.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthStore,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ]
})
export class CoreAuthenticationModule { }

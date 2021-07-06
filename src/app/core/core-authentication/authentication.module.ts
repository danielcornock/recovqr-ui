import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthTokenInterceptor } from './interceptors/auth-token/auth-token.interceptor';
import { AuthApiService } from './services/auth-api/auth-api.service';
import { AuthService } from './services/auth/auth.service';
import { AuthQuery } from './store/auth.query';
import { AuthStore } from './store/auth.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthStore,
    AuthQuery,
    AuthService,
    AuthApiService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ]
})
export class CoreAuthenticationModule { }
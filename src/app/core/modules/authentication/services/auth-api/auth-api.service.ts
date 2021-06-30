import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthEndpoints } from '../../../../../features/auth/constants/auth-endpoints.constant';
import { AuthResponse } from '../../../../../features/auth/interfaces/auth-response.interface';
import { LoginPayload } from '../../../../../features/auth/interfaces/login-payload.interface';
import { RegisterPayload } from '../../../../../features/auth/interfaces/register-payload.interface';

@Injectable()
export class AuthApiService {
  constructor(
    private httpClient: HttpClient
  ) {}

  public register(payload: RegisterPayload): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(AuthEndpoints.Register, payload);
  }

  public login(payload: LoginPayload): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(AuthEndpoints.Login, payload);
  }
}

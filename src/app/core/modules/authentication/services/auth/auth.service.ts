import { Injectable } from '@angular/core';
import { withTransaction } from '@datorama/akita';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StorageKeys } from 'src/app/common/constants/storage-keys.constant';
import { StorageService } from 'src/app/common/services/storage/storage.service';
import { AuthApiService } from 'src/app/core/modules/authentication/services/auth-api/auth-api.service';
import { AuthResponse } from 'src/app/features/auth/interfaces/auth-response.interface';
import { RegisterPayload } from 'src/app/features/auth/interfaces/register-payload.interface';
import { AuthStore } from '../../store/auth.store';

@Injectable()
export class AuthService {
  constructor(
    private authStore: AuthStore,
    private authApiService: AuthApiService,
    private storageService: StorageService
  ) { }

  public initialise(): void {
    const authInfo = this.storageService.getObject<AuthResponse>(StorageKeys.AuthInfo);

    if (!authInfo) {
      return;
    }

    this.authStore.setAuthDetails(authInfo);
  }

  public register(data: RegisterPayload): Observable<AuthResponse> {
    this.authStore.setLoading(true);

    return this.authApiService.register(data).pipe(
      withTransaction((response) => {
        this.authStore.setAuthDetails(response);
        this.authStore.setLoading(false);
      }),
      tap((response) => {
        this.storageService.setObject<AuthResponse>(StorageKeys.AuthInfo, response);
      }),
      catchError((error) => {
        this.authStore.setError(error);
        return throwError(error);
      })
    );
  }

  public login(data: RegisterPayload): Observable<AuthResponse> {
    this.authStore.setLoading(true);

    return this.authApiService.login(data).pipe(
      tap((response) => {
        this.authStore.setAuthDetails(response);
        this.authStore.setLoading(false);
        this.storageService.setObject<AuthResponse>(StorageKeys.AuthInfo, response);
      }),
      catchError((error) => {
        this.authStore.setError(error);
        return throwError(error);
      })
    );
  }
}

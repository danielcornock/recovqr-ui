import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AuthState, AuthStore } from './auth.store';

@Injectable()
export class AuthQuery extends Query<AuthState> {
  constructor(protected store: AuthStore) {
    super(store);
  }

  public getAuthToken(): Observable<string> {
    return this.select((state) => state.jwt);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.select((state) => !!state.jwt);
  }
}
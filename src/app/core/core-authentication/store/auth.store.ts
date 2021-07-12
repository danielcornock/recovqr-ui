import { Store, StoreConfig } from '@datorama/akita';
import { AuthResponse } from 'src/app/features/auth/interfaces/auth-response.interface';

export interface AuthState {
  name: string;
  email: string;
  jwt: string;
}

export function createInitialState(): AuthState {
  return {
    name: '',
    email: '',
    jwt: ''
  };
}

@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }

  public setAuthDetails(authDetails: AuthResponse): void {
    this.update(() => authDetails);
  }

  public removeAuthDetails(): void {
    this.update(createInitialState);
  }
}
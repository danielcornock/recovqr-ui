import { environment } from 'src/environments/environment';

export const AuthEndpoints = {
  Login: environment.apiUrl + 'auth/login',
  Register: environment.apiUrl + 'auth/register'
};
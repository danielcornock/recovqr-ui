import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const ApiUrl = new InjectionToken('ApiUrl');

export const ApiUrlProvider = {
  provide: ApiUrl,
  useValue: environment.apiUrl
};
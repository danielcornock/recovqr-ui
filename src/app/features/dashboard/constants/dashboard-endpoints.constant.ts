import { environment } from 'src/environments/environment';

export const DashboardEndpoints = {
  Information: (): string => environment.apiUrl + 'information'
};
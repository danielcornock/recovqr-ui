import { environment } from 'src/environments/environment';

export const DashboardEndpoints = {
  Information: (): string => environment.apiUrl + 'information',
  QrCode: (): string => environment.apiUrl + 'information/qr-code',
  Tags: (): string => environment.apiUrl + 'tags',
  TagDetail: (id: string): string => environment.apiUrl + `tags/${id}`
};
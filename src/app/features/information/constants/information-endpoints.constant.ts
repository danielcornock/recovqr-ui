import { environment } from 'src/environments/environment';

export const InformationEndpoints = {
  Information: (userId: string): string => environment.apiUrl + `information/${userId}`,
  Tag: (userId: string): string => environment.apiUrl + `tags/${userId}`
};

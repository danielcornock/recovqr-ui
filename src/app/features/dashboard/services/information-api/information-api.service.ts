import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardEndpoints } from '../../constants/dashboard-endpoints.constant';
import { InformationResponse } from '../../interfaces/information-response.interface';

@Injectable()
export class InformationApiService {
  constructor(private httpClient: HttpClient) {}

  public getInformation(): Observable<InformationResponse> {
    return this.httpClient.get<InformationResponse>(DashboardEndpoints.Information());
  }

  public updateInformation(data: Partial<InformationResponse>): Observable<InformationResponse> {
    return this.httpClient.post<InformationResponse>(DashboardEndpoints.Information(), data);
  }
}

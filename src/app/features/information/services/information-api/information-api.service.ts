import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationResponse } from 'src/app/features/dashboard/interfaces/information-response.interface';
import { InformationEndpoints } from '../../constants/information-endpoints.constant';

@Injectable()
export class InformationApiService {
  constructor(private httpClient: HttpClient) { }

  public getInformation(userId: string): Observable<InformationResponse> {
    return this.httpClient.get<InformationResponse>(InformationEndpoints.Information(userId));
  }

  public sendTag(userId: string): Observable<void> {
    return this.httpClient.post<void>(InformationEndpoints.Tag(userId), {});
  }
}

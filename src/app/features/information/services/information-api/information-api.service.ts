import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordinates } from 'src/app/core/core-app/interfaces/coordinates.interface';
import { InformationResponse } from 'src/app/shared/information-library/interfaces/information-response.interface';
import { InformationEndpoints } from '../../constants/information-endpoints.constant';

@Injectable()
export class InformationApiService {
  constructor(private httpClient: HttpClient) { }

  public getInformation(userId: string): Observable<InformationResponse> {
    return this.httpClient.get<InformationResponse>(InformationEndpoints.Information(userId));
  }

  public sendTag(userId: string, location: Coordinates | null): Observable<void> {
    return this.httpClient.post<void>(InformationEndpoints.Tag(userId), location);
  }
}

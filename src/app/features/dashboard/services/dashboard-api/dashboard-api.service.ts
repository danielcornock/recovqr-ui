import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationQuery } from 'src/app/core/core-http/interfaces/pagination-query.interface';
import { PaginationResponse } from 'src/app/core/core-http/interfaces/pagination-response.interface';
import { InformationResponse } from '../../../../shared/information-library/interfaces/information-response.interface';
import { DashboardEndpoints } from '../../constants/dashboard-endpoints.constant';
import { QrCodeResponse } from '../../interfaces/qr-code-response.interface';
import { Tag } from '../../interfaces/tag.interface';

@Injectable()
export class DashboardApiService {
  constructor(private httpClient: HttpClient) {}

  public getInformation(): Observable<InformationResponse> {
    return this.httpClient.get<InformationResponse>(DashboardEndpoints.Information());
  }

  public updateInformation(data: Partial<InformationResponse>): Observable<InformationResponse> {
    return this.httpClient.post<InformationResponse>(DashboardEndpoints.Information(), data);
  }

  public getOwnQrCode(): Observable<QrCodeResponse> {
    return this.httpClient.get<QrCodeResponse>(DashboardEndpoints.QrCode());
  }

  public getPaginatedTagList(query: PaginationQuery): Observable<PaginationResponse<Tag>> {
    return this.httpClient.get<PaginationResponse<Tag>>(DashboardEndpoints.Tags(), { params: { ...query } });
  }

  public getTagList(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(DashboardEndpoints.Tags());
  }

  public deleteTag(tagId: string): Observable<void> {
    return this.httpClient.delete<void>(DashboardEndpoints.TagDetail(tagId));
  }
}

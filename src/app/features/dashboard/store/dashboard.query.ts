import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { InformationResponse } from '../../../shared/information-library/interfaces/information-response.interface';
import { Tag } from '../interfaces/tag.interface';
import { DashboardStore, InformationState } from './dashboard.store';

@Injectable()
export class DashboardQueryService extends Query<InformationState> {
  constructor(store: DashboardStore) {
    super(store);
  }

  public getInformation(): Observable<InformationResponse> {
    return this.select((state) => state.information);
  }

  public getTags(): Observable<Tag[]> {
    return this.select((state) => state.tags);
  }
}
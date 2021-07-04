import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { InformationResponse } from '../interfaces/information-response.interface';
import { DashboardStore, InformationState } from './dashboard.store';

@Injectable()
export class DashboardQueryService extends Query<InformationState> {
  constructor(store: DashboardStore) {
    super(store);
  }

  public getInformation(): Observable<InformationResponse> {
    return this.select((state) => state.information);
  }
}
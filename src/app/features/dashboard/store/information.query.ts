import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { InformationState, InformationStore } from './information.store';

@Injectable()
export class InformationQuery extends Query<InformationState> {
  constructor(store: InformationStore) {
    super(store);
  }

  public getInformation(): Observable<InformationState> {
    return this.select((state) => state);
  }
}
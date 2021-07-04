import { Store, StoreConfig } from '@datorama/akita';
import { InformationResponse } from '../interfaces/information-response.interface';

export interface InformationState {
  information: InformationResponse;
}

export function createInitialState(): InformationState {
  return {
    information: {
      _id: '',
      name: '',
      email: '',
      telephone: '',
      country: '',
      message: ''
    }
  };
}

@StoreConfig({ name: 'information' })
export class DashboardStore extends Store<InformationState> {
  constructor() {
    super(createInitialState());
  }

  public setInformation(data: InformationResponse): void {
    this.update(() => ({ information: data }));
  }
}
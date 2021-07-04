import { Store, StoreConfig } from '@datorama/akita';
import { InformationResponse } from '../interfaces/information-response.interface';

export interface InformationState {
  name: string;
  email: string;
  telephone: string;
  country: string;
  message: string;
}

export function createInitialState(): InformationState {
  return {
    name: '',
    email: '',
    telephone: '',
    country: '',
    message: ''
  };
}

@StoreConfig({ name: 'information' })
export class InformationStore extends Store<InformationState> {
  constructor() {
    super(createInitialState());
  }

  public setInformation(data: InformationResponse): void {
    this.update(() => data);
  }
}
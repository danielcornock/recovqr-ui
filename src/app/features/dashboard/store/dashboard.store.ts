import { Store, StoreConfig } from '@datorama/akita';
import { InformationResponse } from '../interfaces/information-response.interface';
import { Tag } from '../interfaces/tag.interface';

export interface InformationState {
  information: InformationResponse;
  tags: Array<Tag>;
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
    },
    tags: []
  };
}

@StoreConfig({ name: 'information' })
export class DashboardStore extends Store<InformationState> {
  constructor() {
    super(createInitialState());
  }

  public setInformation(information: InformationResponse): void {
    this.update((state) => ({
      ...state,
      information
    }));
  }

  public setTags(tags: Array<Tag>): void {
    this.update((state) => ({
      ...state,
      tags
    }));
  }

  public removeTag(tagId: string): void {
    this.update((state) => ({
      ...state,
      tags: state.tags.filter((tag) => tag._id !== tagId)
    }));
  }
}
import { TestBed } from '@angular/core/testing';

import { InformationApiService } from './information-api.service';

describe('InformationApiService', () => {
  let service: InformationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

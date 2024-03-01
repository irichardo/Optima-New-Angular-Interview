import { TestBed } from '@angular/core/testing';

import { DniApiService } from './dni-api.service';

describe('DniApiService', () => {
  let service: DniApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DniApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

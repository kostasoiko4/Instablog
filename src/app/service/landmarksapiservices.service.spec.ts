import { TestBed } from '@angular/core/testing';

import { LandmarksApiservicesService } from './landmarksapiservices.service';

describe('LandmarksApiservicesService', () => {
  let service: LandmarksApiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandmarksApiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

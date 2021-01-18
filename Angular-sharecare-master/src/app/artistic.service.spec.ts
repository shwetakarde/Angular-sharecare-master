import { TestBed } from '@angular/core/testing';

import { ArtisticService } from './artistic.service';

describe('ArtisticService', () => {
  let service: ArtisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

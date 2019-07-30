import { TestBed } from '@angular/core/testing';

import { LoadService } from './load.service';

describe('ConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadService = TestBed.get(LoadService);
    expect(service).toBeTruthy();
  });
});

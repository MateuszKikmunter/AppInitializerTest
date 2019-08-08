import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LoadService } from './load.service';

describe('ConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: LoadService = TestBed.get(LoadService);
    expect(service).toBeTruthy();
  });
});

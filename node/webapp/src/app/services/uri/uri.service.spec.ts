import { TestBed } from '@angular/core/testing';

import { URIService } from './uri.service';

describe('URIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: URIService = TestBed.get(URIService);
    expect(service).toBeTruthy();
  });
});

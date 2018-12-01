import { TestBed } from '@angular/core/testing';

import { ServerSettingsService } from './server-settings.service';

describe('ServerSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerSettingsService = TestBed.get(ServerSettingsService);
    expect(service).toBeTruthy();
  });
});

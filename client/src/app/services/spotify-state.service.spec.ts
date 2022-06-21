import { TestBed } from '@angular/core/testing';

import { SpotifyStateService } from './spotify-state.service';

describe('SpotifyStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyStateService = TestBed.get(SpotifyStateService);
    expect(service).toBeTruthy();
  });
});

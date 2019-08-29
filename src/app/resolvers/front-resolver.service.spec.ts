import { TestBed } from '@angular/core/testing';

import { FrontResolverService } from './front-resolver.service';

describe('FrontResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontResolverService = TestBed.get(FrontResolverService);
    expect(service).toBeTruthy();
  });
});

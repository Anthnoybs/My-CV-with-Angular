import { TestBed } from '@angular/core/testing';

import { BackSkillsService } from './back-skills.service';

describe('BackSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackSkillsService = TestBed.get(BackSkillsService);
    expect(service).toBeTruthy();
  });
});

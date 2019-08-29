import { TestBed } from '@angular/core/testing';

import { FrontSkillsService } from './front-skills.service';

describe('FrontSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontSkillsService = TestBed.get(FrontSkillsService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSkillsComponentComponent } from './back-skills-component.component';

describe('BackSkillsComponentComponent', () => {
  let component: BackSkillsComponentComponent;
  let fixture: ComponentFixture<BackSkillsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackSkillsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackSkillsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

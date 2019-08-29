import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSkillsComponentComponent } from './front-skills-component.component';

describe('FrontSkillsComponentComponent', () => {
  let component: FrontSkillsComponentComponent;
  let fixture: ComponentFixture<FrontSkillsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontSkillsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSkillsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

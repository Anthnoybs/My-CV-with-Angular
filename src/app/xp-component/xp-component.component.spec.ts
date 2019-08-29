import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpComponentComponent } from './xp-component.component';

describe('XpComponentComponent', () => {
  let component: XpComponentComponent;
  let fixture: ComponentFixture<XpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

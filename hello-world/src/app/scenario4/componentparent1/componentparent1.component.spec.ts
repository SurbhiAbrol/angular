import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentparent1Component } from './componentparent1.component';

describe('Componentparent1Component', () => {
  let component: Componentparent1Component;
  let fixture: ComponentFixture<Componentparent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componentparent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componentparent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentparent2Component } from './componentparent2.component';

describe('Componentparent2Component', () => {
  let component: Componentparent2Component;
  let fixture: ComponentFixture<Componentparent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componentparent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componentparent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

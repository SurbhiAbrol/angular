import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentchild1Component } from './componentchild1.component';

describe('ComponentchildComponent', () => {
  let component: Componentchild1Component;
  let fixture: ComponentFixture<Componentchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componentchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componentchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentchild2Component } from './componentchild2.component';

describe('Componentchild2Component', () => {
  let component: Componentchild2Component;
  let fixture: ComponentFixture<Componentchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componentchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componentchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

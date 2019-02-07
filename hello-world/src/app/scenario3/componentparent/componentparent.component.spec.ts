import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentparentComponent } from './componentparent.component';

describe('ComponentparentComponent', () => {
  let component: ComponentparentComponent;
  let fixture: ComponentFixture<ComponentparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

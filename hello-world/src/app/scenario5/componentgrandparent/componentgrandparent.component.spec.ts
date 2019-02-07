import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentgrandparentComponent } from './componentgrandparent.component';

describe('ComponentgrandparentComponent', () => {
  let component: ComponentgrandparentComponent;
  let fixture: ComponentFixture<ComponentgrandparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentgrandparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentgrandparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

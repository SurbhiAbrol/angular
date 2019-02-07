import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcontainercomponentComponent } from './cardcontainercomponent.component';

describe('CardcontainercomponentComponent', () => {
  let component: CardcontainercomponentComponent;
  let fixture: ComponentFixture<CardcontainercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardcontainercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcontainercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

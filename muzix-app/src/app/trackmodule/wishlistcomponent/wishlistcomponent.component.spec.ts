import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistcomponentComponent } from './wishlistcomponent.component';

describe('WishlistcomponentComponent', () => {
  let component: WishlistcomponentComponent;
  let fixture: ComponentFixture<WishlistcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

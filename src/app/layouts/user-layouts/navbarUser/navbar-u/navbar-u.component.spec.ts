import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUComponent } from './navbar-u.component';

describe('NavbarUComponent', () => {
  let component: NavbarUComponent;
  let fixture: ComponentFixture<NavbarUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

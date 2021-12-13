import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserLayoutComponent } from './auth-user-layout.component';

describe('AuthUserLayoutComponent', () => {
  let component: AuthUserLayoutComponent;
  let fixture: ComponentFixture<AuthUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUserLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

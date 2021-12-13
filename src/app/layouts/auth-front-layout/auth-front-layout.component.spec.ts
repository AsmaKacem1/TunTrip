import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFrontLayoutComponent } from './auth-front-layout.component';

describe('AuthFrontLayoutComponent', () => {
  let component: AuthFrontLayoutComponent;
  let fixture: ComponentFixture<AuthFrontLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthFrontLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFrontLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFrontComponent } from './signup-front.component';

describe('SignupFrontComponent', () => {
  let component: SignupFrontComponent;
  let fixture: ComponentFixture<SignupFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

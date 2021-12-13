import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousseComponent } from './sousse.component';

describe('SousseComponent', () => {
  let component: SousseComponent;
  let fixture: ComponentFixture<SousseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

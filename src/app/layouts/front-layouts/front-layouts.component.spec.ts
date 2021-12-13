import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLayoutsComponent } from './front-layouts.component';

describe('FrontLayoutsComponent', () => {
  let component: FrontLayoutsComponent;
  let fixture: ComponentFixture<FrontLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

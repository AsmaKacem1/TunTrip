import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahdiaComponent } from './mahdia.component';

describe('MahdiaComponent', () => {
  let component: MahdiaComponent;
  let fixture: ComponentFixture<MahdiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahdiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

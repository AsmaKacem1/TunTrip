import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationUComponent } from './destination-u.component';

describe('DestinationUComponent', () => {
  let component: DestinationUComponent;
  let fixture: ComponentFixture<DestinationUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

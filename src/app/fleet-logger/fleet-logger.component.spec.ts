import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetLoggerComponent } from './fleet-logger.component';

describe('FleetLoggerComponent', () => {
  let component: FleetLoggerComponent;
  let fixture: ComponentFixture<FleetLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

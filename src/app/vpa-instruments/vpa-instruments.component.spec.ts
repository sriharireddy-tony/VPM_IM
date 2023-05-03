import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPAInstrumentsComponent } from './vpa-instruments.component';

describe('VPAInstrumentsComponent', () => {
  let component: VPAInstrumentsComponent;
  let fixture: ComponentFixture<VPAInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPAInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPAInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

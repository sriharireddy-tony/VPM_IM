import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTDECUIMComponent } from './ptd-ecu-im.component';

describe('PTDECUIMComponent', () => {
  let component: PTDECUIMComponent;
  let fixture: ComponentFixture<PTDECUIMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTDECUIMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTDECUIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

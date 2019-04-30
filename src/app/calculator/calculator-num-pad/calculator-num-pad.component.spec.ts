import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorNumPadComponent } from './calculator-num-pad.component';

describe('CalculatorNumPadComponent', () => {
  let component: CalculatorNumPadComponent;
  let fixture: ComponentFixture<CalculatorNumPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorNumPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorNumPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

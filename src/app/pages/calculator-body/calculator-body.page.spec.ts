import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorBodyPage } from './calculator-body.page';

describe('CalculatorBodyPage', () => {
  let component: CalculatorBodyPage;
  let fixture: ComponentFixture<CalculatorBodyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculatorBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

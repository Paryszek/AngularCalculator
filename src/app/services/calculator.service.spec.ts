import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { CalculatorVM } from '../viewmodels/calculator.model';
import { AppModule } from '../app.module';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  }));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('adding 2 to 3 should give 5', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.addValues(2, 3)).toBe(5);
  });

  it('substracting 2 from 3 should give 1', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.subValues(2, 3)).toBe(-1);
  });

  it('append 5 two times to calculator model first number property should return 55', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const calcDummyData = new CalculatorVM();
    calcDummyData.appendToFirstNumber = 5;
    calcDummyData.appendToFirstNumber = 5;
    expect(calcDummyData.getFirstNumber).toBe(55);
  });

  it('append 5 two times to calculator model second number property should return 55', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const calcDummyData = new CalculatorVM();
    calcDummyData.appendToSecondNumber = 5;
    calcDummyData.appendToSecondNumber = 5;
    expect(calcDummyData.getSecondNumber).toBe(55);
  });

  it('calculate value using calculator model', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const calcDummyData = new CalculatorVM();
    calcDummyData.setFirstNumber = `333`;
    calcDummyData.setOperator = `-`;
    calcDummyData.setSecondNumber = `333`;
    const calcResult = service.calcValue(calcDummyData);
    expect(calcResult.getFirstNumber).toBe(0);
  });
});

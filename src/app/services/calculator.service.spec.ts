import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('adding 2 to 3 should give 5', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.addValues(2, 3)).toBe(5);
  })

  it('substracting 2 from 3 should give 1', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.subValues(2, 3)).toBe(1);
  })
});

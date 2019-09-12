import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculatorVM } from '../viewmodels/calculator.model';

@Injectable()
export class CalculatorService {  
  calculatorDataStream: BehaviorSubject<CalculatorVM> = new BehaviorSubject<CalculatorVM>(new CalculatorVM());
  constructor() {}

  updateCalculatorStream(calcVM: CalculatorVM) {
    if (!calcVM) {
      return;
    }

    this.calculatorDataStream.next(calcVM);
  }

  getCalculatorObservable() {
    return this.calculatorDataStream.asObservable();
  }

  getCalculatorData() {
    return this.calculatorDataStream.getValue();
  }

  calculate() {
    const calcData = this.getCalculatorData();
    const newCalcData = this.calcValue(calcData);
    this.updateCalculatorStream(newCalcData);
  }

  addValues(first: number, second: number): number {
    return first + second;
  }

  subValues(first: number, second: number): number {
    return first - second;
  }

  calcValue(calcData: CalculatorVM) {
    const operator = calcData.getOperator;
    if (operator === `+`) {
      calcData.setFirstNumber = this.addValues(calcData.getFirstNumber, calcData.getSecondNumber).toString();
    } else if (operator === `-`) {
      calcData.setFirstNumber = this.subValues(calcData.getFirstNumber, calcData.getSecondNumber).toString();
    }
    calcData.setOperator = ``;
    calcData.setSecondNumber = ``;
    return calcData;
  }
}

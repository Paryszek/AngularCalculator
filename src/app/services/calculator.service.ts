import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculatorVM } from '../viewmodels/calculator.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculatorDataStream: BehaviorSubject<CalculatorVM> = new BehaviorSubject<CalculatorVM>(new CalculatorVM());
  constructor() {}

  updateCalculatorStream(calcVM: CalculatorVM) {
    if (!calcVM) return;

    this.calculatorDataStream.next(calcVM);
  }

  getCalculatorObservable() {
    return this.calculatorDataStream.asObservable();
  }

  getCalculatorData() {
    return this.calculatorDataStream.getValue();
  }

  updateCurrState(calcVM: CalculatorVM) {
    const calcState = this.getCalculatorData();
    calcState.setFirstNumber = calcVM.getFirstNumber;
    calcState.setSecondNumber = calcVM.getSecondNumber;
    calcState.setOperator = calcVM.setOperator;
    this.updateCalculatorStream(calcState);
  }

  addValues(first: number, second: number): number {    
    return first + second;
  }

  subValues(first: number, second: number): number {
    return first - second;
  }
}

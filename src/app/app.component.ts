import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';
import { CalculatorVM } from './viewmodels/calculator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CalculatorService]
})
export class AppComponent {
  calculatorVM: CalculatorVM = new CalculatorVM();
  valueHolder: string = `0`;
  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.calculatorService.getCalculatorObservable()
      .subscribe((calculatorState) => {
        this.calculatorVM = new CalculatorVM();
        this.calculatorVM.appendToFirstNumber = calculatorState.getFirstNumber;
        this.calculatorVM.appendToSecondNumber = calculatorState.getSecondNumber;
        this.calculatorVM.setOperator = calculatorState.getOperator;
        this.valueHolder = this.calculatorVM.getValueHolder;
      })
  }

  numberClicked(value: number) {
    this.calculatorVM.setNumber = value;
    this.calculatorService.updateCalculatorStream(this.calculatorVM);
  }

  addClicked() {
    this.calculatorVM.setOperator = `+`;
    this.calculatorService.updateCalculatorStream(this.calculatorVM);
  }

  subClicked() {
    this.calculatorVM.setOperator = `-`;
    this.calculatorService.updateCalculatorStream(this.calculatorVM);
  }

  equalClicked() {
    this.calculatorService.calculate();
  }
}

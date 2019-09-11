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
        this.calculatorVM.setFirstNumber = calculatorState.getFirstNumber;
        this.calculatorVM.setSecondNumber = calculatorState.getSecondNumber;
        this.calculatorVM.setOperator = calculatorState.getOperator;
        this.valueHolder = this.calculatorVM.getValueHolder;
      })
  }
  
  numberClicked(number) {
    console.log(`${number} button clicked`);
  }

  addClicked() {
    console.log(`add button clicked`);
  }

  subClicked() {
    console.log(`sub button clicked`);
  }

  equalClicked() {
    console.log(`equal button clicked`);
  }
}

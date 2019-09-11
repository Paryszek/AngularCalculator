
export class CalculatorVM {
    operator;
    firstNumber;
    secondNumber;
    constructor() {
        this.operator = ``;
        this.firstNumber = ``;
        this.secondNumber = ``;
    }

    set setFirstNumber(value: number) {
        this.firstNumber += value || ``;
    }

    get getFirstNumber() {
        return this.firstNumber.length ? +this.firstNumber : 0;
    }

    set setSecondNumber(value: number) {
        this.secondNumber += value || ``;
    }

    get getSecondNumber() {
        return this.secondNumber.length ? +this.secondNumber : 0;
    }

    set setOperator(value: number) {
        this.operator = value || ``;
    }

    get getOperator() {
        return this.operator.length ? this.operator : ``;
    }

    get getValueHolder() {
        return `${this.firstNumber} ${this.operator} ${this.secondNumber}`;
    }
}

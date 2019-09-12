
export class CalculatorVM {
    private operator: string;
    private firstNumber: string;
    private secondNumber: string;
    constructor() {
        this.operator = ``;
        this.firstNumber = ``;
        this.secondNumber = ``;
    }

    set setNumber(value: number) {
        if (this.operator.length) {
            this.appendToSecondNumber = value;
        } else {
            this.appendToFirstNumber = value;
        }
    }

    set appendToFirstNumber(value: number) {
        if (this.isAValidNumber(value)) {
            this.firstNumber += value;
        }
    }

    set setFirstNumber(value: string) {
        if (this.isAValidNumber(+value)) {
            this.firstNumber = value;
        }
    }

    get getFirstNumber() {
        return this.firstNumber.length ? +this.firstNumber : 0;
    }

    set appendToSecondNumber(value: number) {
        if (this.isAValidNumber(value)) {
            this.secondNumber += value;
        }
    }

    set setSecondNumber(value: string) {
        if (this.isAValidNumber(+value)) {
            this.secondNumber = value;
        }
    }

    get getSecondNumber() {
        return this.secondNumber.length ? +this.secondNumber : 0;
    }

    set setOperator(value: string) {
        this.operator = value || ``;
    }

    get getOperator() {
        return this.operator.length ? this.operator : ``;
    }

    get getValueHolder() {
        return `${this.firstNumber} ${this.operator} ${this.secondNumber}`;
    }

    isAValidNumber(value: number) {
        return value || value === 0;
    }
}

//Using The Javascript Object oriented programing Class Constructor..
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    else if (
      number === 'log10' &&
      this.previousOperand === '' &&
      this.currentOperand === ''
    ) {
      number = Math.LN10;
      alert('hello');
      this.currentOperand = this.currentOperand.toString() + number.toString();
    } else if (number === 'PI') {
      alert('PI');
      number = Math.PI;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;

    // let decimal = '.';
    // let pi_ = 3.142;

    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    //  if (isNaN(prev) || isNaN(current))return;
    // if (!this.currentOperand && this.previousOperand) {
    //   switch (this.operation) {
    //     case 'PI':
    //       computation = Math.PI;
    //       break;
    //   }
    // } else {
    // if (computation == this.operation) {
    //   if (this.operation == Math.PI) {
    //     result = Math.PI;
    //   }
    // }
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      // case 'log10':
      //   number = Math.LN10;
      //   alert('log');
      //   break;
      // case 'PI':
      //   computation = Math.PI;
      //   break;
      case 'e':
        computation = Math.E;
        break;
      //tan and cosine section..
      case 'cos':
        computation = Math.cos(prev);
        break;
      case 'tan':
        computation = Math.tan(prev);
        break;
      case 'sin':
        computation = Math.sin(prev);
        break;
      case 'sinh':
        computation = Math.sinh(prev);
        break;
      case 'cosh':
        computation = Math.cosh(prev);
        break;
      case 'tanh':
        computation = Math.tanh(prev);
        break;
      case '√':
        computation = Math.sqrt(prev);
        break;
      case 'X2':
        computation = Math.pow(prev, 2);
        break;
      case 'X3':
        computation = Math.pow(prev, 3);
        break;
      case 'log':
        computation = Math.log(prev);
        break;
      case '10x':
        computation = Math.pow(10, prev);
        break;
      case '3√':
        computation = Math.sqrt(3, current);
        break;
      case '1/2':
        computation = Math.SQRT1_2;
        break;
      case 'Mod':
        computation = prev % current;
        break;
      case 'ex':
        computation = prev.toExponential(current);
        break;
      case 'xy':
        computation = Math.pow(prev, current);
        break;
      case 'oct':
        computation = prev.toString(current);
        break;
      default:
        return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigit: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}. ${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // updateDisplay() {
  //   this.currentOperandTextElement.innerText = this.getDisplayNumber(
  //     this.currentOperand
  //   );
  //   this.currentOperandTextElement.innerText = this.currentOperand;
  //   this.previousOperandTextElement.innerText = this.previousOperand;
  //   this.currentOperandTextElement.innerText = this.getDisplayNumber(
  //     this.currentOperand
  //   );
  //   if (this.operation != null) {
  //     this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
  //       this.previousOperand
  //     )} ${this.operation}`;
  //   } else {
  //     this.previousOperandTextElement.innerText = '';

  //   }
  //}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );

    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
} // end of class defination

//  Variables defined
const numberButtons = document.querySelectorAll('[data-number]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const operationButtons = document.querySelectorAll('[data-operation]');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

//Added an Event buttons with callBack functions..

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});

// function operationButtons() {
//   document.querySelector('[data-operation]').innerText =
//     compute().this.operation == currentOperandTextElement
//       ? compute().this.operation
//       : '';
// }

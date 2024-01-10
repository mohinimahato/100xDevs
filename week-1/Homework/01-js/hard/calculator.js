/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
    this.result = 0;
  }
  add(number) {
    this.number += number
  }
  substract(number) {
    this.result -= number
  }
  multiply(number) {
    this.result *= number
  }
  divide(number) {
    if (number === 0) {
      throw new Error('Cannot divide by 0')
    } else {
      this.result /= number
    }

  }
  clear() {
    this.result = 0
  }
  getResult() {
    return this.result
  }
  calculate(expression) {
    // Remove continuous spaces and trim the expression , \s is a shorthand character class that represents any whitespace character (spaces, tabs, line breaks). and "+" Quantifier that matches one or more occurrences of the preceding element, the "g" makes the regular expression match globally,
    const cleanedExpression = expression.replace(/\s+/g, "").trim();
    if (!/^[\d+\-*/().]+$/.test(cleanedExpression)) {
      throw new Error('Invalid expression : contains non-numerical characters');
    }

    try {
      this.result = eval(cleanedExpression);
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }


}
const calculator = new Calculator();
calculator.calculate('(2 + 3) * (6 - (4 + 1) / 2) + 7 ');
console.log(calculator.getResult());
console.log("_______________")
calculator.calculate('(2 + 3) * (6 - (4 + 1) / 2) + 7 + 7/0 ');
console.log(calculator.getResult());
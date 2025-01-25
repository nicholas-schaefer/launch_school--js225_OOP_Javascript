const _notes = () => {
  `
  Write a program that uses two functions, add and subtract, to manipulate a running total value.

  When you invoke either function with a number,
  it should add or subtract that number from the running total and log the new total to the console. Usage looks like this:

  > add(1);
  1
  > add(42);
  43
  > subtract(39);
  4
  > add(6);
  10
  `
}

const calculator = {
  total: 0,
  add(n) {
    this.total +=n;
    console.log(this.total);
  },
  subtract(n) {
    this.total -=n;
    console.log(this.total);
  }
}

const add = calculator.add.bind(calculator);
const subtract = calculator.subtract.bind(calculator);


const tests = function (){
  add(1);// 1
  add(42);//43
  subtract(39);//4
  add(6);// 10
}

tests();
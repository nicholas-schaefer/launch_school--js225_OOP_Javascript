"use strict";

(function notes (){
  `
  Create a MathUtils class with static methods add, subtract, multiply, and divide.
  These methods should perform basic arithmetic operations.
  `
})

class MathUtils {
  // static partial(primary, arg1){
  //   return primary(arg1, arg2);
  // }

  static add(arg1, arg2){
    return arg1 + arg2;
  }
  static subtract(arg1, arg2){
    return arg1 - arg2;
  }
  static divide(arg1, arg2){
    if (arg2 === 0) throw new Error("RangeError: Division by zero");
    return arg1 / arg2;
  }
  static multiply(arg1, arg2){
    return arg1 * arg2;
  }
}

(function tests(){
  console.log(MathUtils.add(5, 3));       // 8
  console.log(MathUtils.subtract(10, 4)); // 6
  console.log(MathUtils.multiply(6, 7));  // 42
  console.log(MathUtils.divide(20, 5));   // 4
  console.log(MathUtils.divide(10, 0));   // RangeError: Division by zero
})()
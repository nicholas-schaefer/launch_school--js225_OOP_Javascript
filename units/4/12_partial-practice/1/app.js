const _notes = () => {
  `
  Use partial function application to implement a function, makeSub,
  that returns a function that subtracts 5 from the argument passed to the return function.
  `
}

// function partial(primary, arg1) {
//   return arg2 => primary(arg1, arg2);
// }

function subtract(a, b) {
  return a - b;
}

const makeSub = (subtrahend) => (
  minuend => subtract(minuend, subtrahend)
);

function tests() {
  const sub5 = makeSub(5);

  console.log(sub5(10)); // 5
  console.log(sub5(20)); // 15
}
tests()
const notes = ()=> {
  `
  Use the partial function shown above and your solution to problem 1 to create sayHello and sayHi functions that work like this:
  `
}

function greet(salutation, subject){
  salutation = salutation[0].toUpperCase() + salutation.slice(1);
  console.log(`${salutation},  ${subject}!`);
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}


const test = function runTests(){
  // greet('howdy', 'Joe');//Howdy, Joe!
  // greet('good morning', 'Sue');//Good morning, Sue!

  let sayHello = partial(greet, 'hi')

  sayHello('Brandon');//Hello, Brandon!
  // sayHi('Sarah');//Hi, Sarah!
}
test()
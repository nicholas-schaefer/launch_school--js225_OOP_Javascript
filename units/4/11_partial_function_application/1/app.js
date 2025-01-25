const notes = ()=> {
  `
  Write a function named greet that takes two arguments and logs a greeting:
  `
}

function greet(salutation, subject){
  salutation = salutation[0].toUpperCase() + salutation.slice(1);
  console.log(`${salutation},  ${subject}!`);
}

const test = function runTests(){
  greet('howdy', 'Joe');//Howdy, Joe!
  greet('good morning', 'Sue');//Good morning, Sue!
}
test()
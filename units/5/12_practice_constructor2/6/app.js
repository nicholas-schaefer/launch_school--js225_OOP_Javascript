(function notes() {
  `
  Not even close;)
  Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.
`});

(function tests() {
  function neww(constructor, args) {
    const newObj = Object.create(constructor.prototype);
    newObj.first =  args[0];
    newObj.last =  args[1];
    newObj.greeting = function(){
      return `Hello, ${this.first} ${this.last}`;
    }
    // newObj.prototype = constructor;
    // newObj.constructor = constructor
    // console.log(newObj.prototype)
    // console.log(newObj.constructor.prototype)

    return newObj
  }

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.greeting = function() {
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
  };

  let john = neww(Person, ['John', 'Doe']);
  console.log(john.greeting());          // => Hello, John Doe
  console.log(john.constructor);         // Person(firstName, lastName) {...}
})();
(function notes1() {
  `
  Create a class Cat that logs the string I'm a cat! to the console whenever a new instance is created.
  Then instantiate a new instance of Cat and assign it to a kitty variable.
`});
(function notes2() {
  `
  add a parameter to constructor that provides a name for the Cat object, and assign this parameter to a property called name.
  If no argument is provided, the name should default to Kitty.
  Then, replace the I'm a cat! message with a greeting that includes the provided name.
`});
(function notes3() {
  `
move the greeting from the constructor method to an instance method named greet that logs a greeting to the console when invoked.
Additionally, define one more instance method named rename that renames a Cat instance when invoked.
`});
(function notes4() {
  `
write any code necessary so that the string
  Hello! I'm a cat!
is logged to the console when Cat.genericGreeting is invoked.
`});


(function tests() {
  const Cat = class{
    static genericGreeting(){
      console.log("Hello! I'm a cat!")
    }

    constructor(name = "Kitty"){
      this.name = name;
    }

    greet(){
      console.log(`My name is: ${this.name}`);
      return this;
    }

    rename(newName){
      this.name = newName;
      return this;
    }


  }

  let kitty = new Cat(); // Hello! My name is Kitty!
  let sophie = new Cat('Sophie'); // Hello! My name is Sophie!

  sophie.greet().rename('fred').greet()

  Cat.genericGreeting();


})();
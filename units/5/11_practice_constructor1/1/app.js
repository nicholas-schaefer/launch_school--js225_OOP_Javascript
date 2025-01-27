(function notes() {
  `
  What does the following code log to the console?

  Line 13 creates a new object foo with the constructor function.

  The constructor function calls the bar method while constructing the object, which logs 2 out.
  foo.bar() logs the next 2.

  With Foo(), we're calling the Foo function with the global object context which sets the global object's a to 2, and logs out the next 2.
  Foo.call(obj) adds the a property and the bar method to the obj object, then called the bar method, logging out the next 2.
  At this point, we can now call the bar method directly on obj so this logs out the fifth 2.
  Finally, since the global object's a property is already changed to 2, the last 2 is logged out.
`});

(function tests() {
  let a = 1;
  let foo;
  let obj;

  function Foo() {
    this.a = 2;
    this.bar = function () {
      console.log(this.a);
    };
    this.bar();
  }

  foo = new Foo();

  foo.bar(); //2
  Foo();     //2

  obj = {};
  Foo.call(obj);
  obj.bar();//2

  console.log(this.a); //2
})();
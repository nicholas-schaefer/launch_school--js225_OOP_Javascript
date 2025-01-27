(function notes() {
  `
  Write a function to provide a shallow copy of an object.
  The object that you copy should share the same prototype chain as the original object,
  and it should have the same own properties that return the same values or objects when accessed.

  Use the code below to verify your implementation:
`})

function shallowCopy(object) {
  const newObj = Object.create(object)

  for (const [key, val] of Object.entries(object)) {
    newObj[key] = val;
  }
  // Object.setPrototypeOf(newObj, object)
  return newObj;
}

(function tests() {
  let foo = {
    a: 1,
    b: 2,
  };

  let bar = Object.create(foo);

  console.log(Object.getOwnPropertyNames(foo))
  // return
  bar.c = 3;
  bar.say = function () {
    console.log('c is ' + this.c);
  };

  let baz = shallowCopy(bar);
  console.log(baz)
  console.log(baz.a);       // => 1
  baz.say();                // => c is 3
  console.log(baz.hasOwnProperty('a'));  // false
  console.log(baz.hasOwnProperty('b'));  // false
  console.log(baz.hasOwnProperty('c'));  // true
})()
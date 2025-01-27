(function notes() {
  `
  Create a function that can create an object with a given object as its prototype, without using Object.create.
`});

(function tests() {
  function createObject(obj) {
    const newObj = {}
    Object.setPrototypeOf(newObj, obj)
    return newObj;
  }

  let foo = {
    a: 1
  };

  let bar = createObject(foo);
  console.log(foo.isPrototypeOf(bar));         // true
})();
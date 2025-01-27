(function notes(){`
  Write a function that extends an object (destination object) with contents from multiple objects (source objects).
`});

(function tests(){
  function extend(destination, ...source) {

    let newObj;


    source.forEach((source) => {
      newObj = Object.create(source)
    })
    return newObj;
  }

  let foo = {
    a: 0,
    b: {
      x: 1,
      y: 2,
    },
  };

  let joe = {
    name: 'Joe'
  };

  let funcs = {
    sayHello() {
      console.log('Hello, ' + this.name);
    },

    sayGoodBye() {
      console.log('Goodbye, ' + this.name);
    },
  };
  let object = extend({}, foo, joe, funcs);
  console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(object)))
  return
  console.log(object.b.x);          // => 1
  object.sayHello();                // => Hello, Joe
})();
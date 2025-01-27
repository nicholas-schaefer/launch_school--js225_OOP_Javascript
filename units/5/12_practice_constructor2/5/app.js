(function notes() {
  `
  Similar to the problem above, without using Object.create,
  create a begetObject method that you can call on any object to create an object inherited from it:
`});

(function tests() {
  let foo = {
    a: 1,
    begetObject(){
      return Object.setPrototypeOf({}, this)
    },
  };


  let bar = foo.begetObject();
  console.log(foo.isPrototypeOf(bar));         // true
})();
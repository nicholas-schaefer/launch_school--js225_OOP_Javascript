(function notes() {
  `
  In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:
`});

(function tests() {
  let ninjaA = (function () {
    function Ninja() { };
    return new Ninja();
  })();

  // create a ninjaB object

  console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
})();
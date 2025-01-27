(function notes() {
  `
  What will the following code log out and why?
`});

(function tests() {
  let ninja;
  function Ninja() {
    this.swung = true;
  }

  ninja = new Ninja();

  Ninja.prototype = {
    swingSword: function () {
      return this.swung;
    },
  };

  console.log(ninja.swingSword());
})();
(function notes(){`
  Write a constructor function Circle, that takes a radius as an argument.
  You should be able to call an area method on the created objects to get the circle's area.

  Test your implementation with the following code:
`});

(function tests(){

  // class Circle{
  //   constructor(radius){
  //     this.radius = radius;
  //   }
  //   area(){
  //     return Math.PI * (this.radius ** 2);
  //   }
  // }

  function Circle(radius){
    return {
      radius,
      area(){
        return Math.PI * (this.radius ** 2);
      },
    }
  }

  let a = new Circle(3);
  let b = new Circle(4);

  console.log(a.area().toFixed(2)); // => 28.27
  console.log(b.area().toFixed(2)); // => 50.27
})();
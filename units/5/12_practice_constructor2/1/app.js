(function notes() {
  `

  Create an object called shape that has a getType method.

  Define a Triangle constructor function whose prototype is shape.
  Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.

  Add a new method to the prototype called getPerimeter.

  Test your implementation with the following code:
`});

(function tests() {
  const shape = {
    getType(){
      return this.type;
    }
  }

  function Triangle(a, b, c){
    const obj = Object.create(shape);


    obj.a = a;
    obj.b = b;
    obj.c = c;
    obj.type = "triangle";

    obj.getPerimeter = function (){
      return this.a + this.b + this.c;
    }

    return obj;
  }
  Triangle.prototype = shape;
  Triangle.prototype.constructor = Triangle;



  let t = new Triangle(3, 4, 5);
  console.log(t.constructor);                 // Triangle(a, b, c)
  console.log(shape.isPrototypeOf(t));        // true
  console.log(t.getPerimeter());              // 12
  console.log(t.getType());                   // "triangle"
})();
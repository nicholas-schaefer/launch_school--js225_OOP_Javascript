(function notes5() {
  `
  Given the class from the previous problem,
  write a class called Square that inherits from Rectangle, and is used like this:
`});

(function notes6() {
  `
  Given the class from the previous problem, write a class called Square that inherits from Rectangle, and is used like this:
`});

(function tests() {
  const Rectangle = class{
    constructor(side1, side2){
      const sides = [side1, side2].sort((a,b) => a - b);
      this.width = sides[0];
      this.length = sides[1];
    }

    getWidth(){
      return this.width;
    }

    getLength(){
      return this.length
    }

    getArea(){
      return this.getWidth() * this.getLength()
    }
  }

  const Square = class extends Rectangle{
    constructor(side){
      super(side, side);
    }
  }

  let square = new Square(5);
  console.log(`area of square = ${square.getArea()}`); // area of square = 25

  return
  let rect = new Rectangle(4, 5);

  console.log(rect.getWidth()); // 4
  console.log(rect.getLength()); // 5
  console.log(rect.getArea()); // 20
})();
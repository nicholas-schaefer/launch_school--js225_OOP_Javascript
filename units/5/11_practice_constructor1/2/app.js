(function notes(){`
  What does the following code log to the console?

  How do you fix this problem?
`});

(function tests(){
  let RECTANGLE = {
    area() {
      return this.width * this.height;
    },
    perimeter() {
      return 2 * (this.width + this.height);
    },
  };

  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = RECTANGLE.area.call(this);
    this.perimeter = RECTANGLE.perimeter.call(this);
  }

  let rect1 = new Rectangle(2, 3);
  console.log(rect1.area);
  console.log(rect1.perimeter);
})();
(function notes (){
  `
  Given the following three objects, create an object factory that can eliminate the code duplication:
  `
})

const makeFruit = function(name, color) {

  return {
    name: name,
    color: color,

    isRipe: function() {
      return `This ${this.name} is ripe.`;
    },

    describe: function() {
      return `This ${this.name} is ${this.color}.`;
    },
  }
}

const tests = function(){
  const apple = makeFruit('Apple', 'Red');
  const banana = makeFruit('Banana', 'Yellow');
  const blackberry = makeFruit('Blackberry', 'Black');

  const fruits = [apple, banana, blackberry];

  fruits.forEach(function(fruit){
    console.log(fruit)
    console.log(fruit.isRipe())
    console.log(fruit.describe())
    console.log('----------')
  })
}

tests();
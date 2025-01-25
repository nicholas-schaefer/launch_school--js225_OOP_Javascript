const _notes = () =>{
  `
  Implement makeListTransformer below such that timesTwo's return value matches the commented return value.
  `
}

function makeListTransformer(func) {
  return collection => collection.map(func);
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
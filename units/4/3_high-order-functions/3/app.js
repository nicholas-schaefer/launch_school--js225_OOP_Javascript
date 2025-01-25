let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return (num)=> (num % 2 === 0);
}

let checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]


// Implement makeCheckEven below, such that the last line of the code returns an array [2, 4].
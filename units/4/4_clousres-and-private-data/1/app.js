const _notes = () =>{
  `
  Create a makeCounterLogger function that takes a number as an argument and returns a function.
  When we invoke the returned function with a second number,
  it should count up or down from the first number to the second number, logging each number to the console:

  > let countlog = makeCounterLogger(5);
  > countlog(8);
    5
    6
    7
    8

    > countlog(2);
      5
      4
      3
      2

  MY SOLUTION IS DIFFERENT PROBLEM SOLVED =)
  `
}

function makeCounterLogger(start = 0){
  let currCounter = start

  return (updatedCounter) => {
    console.log(currCounter);

    if (currCounter === updatedCounter) return;

    if (currCounter < updatedCounter){
      while (currCounter < updatedCounter){
        currCounter += 1;
        console.log(currCounter);
      }
      return;
    }

    if (currCounter > updatedCounter){
      while (currCounter > updatedCounter){
        currCounter -= 1;
        console.log(currCounter);
      }
      return
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);

countlog(2);

const _notes = () => {
  `
  Write a function named makeMultipleLister that, when invoked and passed a number,
  returns a function that logs every positive integer multiple of that number less than 100.

  Usage looks like this:

  > let lister = makeMultipleLister(13);
  > lister();
    13
    26
    39
    52
    65
    78
    91
  `
}

const makeMultipleLister = function (n) {
  const EXCLUSIVE_UPPER_BOUND = 100;

  return () => {
    if (n <= 0 || n >= EXCLUSIVE_UPPER_BOUND) return;
    let multiple = n;

    do {
      console.log(multiple);
      multiple += n;
    } while ( multiple < EXCLUSIVE_UPPER_BOUND);

  }
}

function tests(){
  let lister = makeMultipleLister(13);
  lister();
}
tests()
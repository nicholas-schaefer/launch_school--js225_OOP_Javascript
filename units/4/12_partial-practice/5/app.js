const _notes = () => {
  `
  Implement makeMathRollCall such that it returns a partially applied rollCall function, with the subject as 'Math'.
  `
}

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

const makeMathRollCall = () => (
  students => rollCall('Math', students)
)


function test(){
  let mathRollCall = makeMathRollCall();
  mathRollCall(subjects['Math']);
  // => Math:
  // => Fatima
  // => Gary
  // => Susan
}
test()
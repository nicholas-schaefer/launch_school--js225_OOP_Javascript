const _notes = () => {
  `
  Is there a way to set the value of systemStatus to the value of the inner variable status without changing startup in any way? If so, how?

  NO LOL!!!!!
  `
}

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();

console.log(ready)
// let systemStatus = // ?
const _notes = () => {
  `
    We'll build a simple todo list program using the techniques we've seen in this assignment.
    Write a makeList function that returns a new function that implements a todo list.
    The returned function should have the following behavior:

    When called with an argument that is not already on the list, it adds that argument to the list.
    When called with an argument that is already on the list, it removes the element from the list.
    When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.
  `
}

const makeList = function(){
  const todos = new Set();
  const msg = {
    empty: 'The list is empty.',
  }

  const listTodos = () => {
    if (todos.size === 0){
      console.log(msg.empty);
    }
    todos.forEach(todo =>console.log(todo));
  }

  const addTodo = (todo) => {
    todos.add(todo);
    console.log([todo, 'added!'].join(' '))
  }

  const deleteTodo = (todo) => {
    todos.delete(todo);
    console.log([todo, 'removed!'].join(' '));

  }

  return (todo = null) =>{
    if (todo === null){
      listTodos();
      return;
    }

    todos.has(todo) ? deleteTodo(todo) : addTodo(todo);
  }
}


const tests = () => {
  let list = makeList();
  list(); // The list is empty.
  list('make breakfast'); //make breakfast added!
  list('read book'); //read book added!
  list(); //make breakfast // read book
  list('make breakfast'); // make breakfast removed!
  list(); //read book
}
tests();

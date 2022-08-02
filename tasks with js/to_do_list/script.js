let arr_toDo = [];
// const inputText = document.querySelector(".input-js");
// const buttonAdd = document.querySelector(".btn");

function addToDo(text) {
  const todo = {
    text,
    status: false,
    id: `${Math.random()}`,
  };

  arr_toDo.push(todo);
}

function deleteToDo(id) {}
arr_toDo.forEach((todo) => {
  if (todo.id === id) {
    todo.status = true;
  }
});
function updateTodo() {
  console.log(arr_toDo);
}

addToDo("Помыть посуду");

updateTodo();

let arr_toDo = [];
const inputText = document.querySelector(".input-js");
const buttonAdd = document.querySelector(".button");

function addToDo(text) {
  const todo = {
    text: "",
    status: false,
    id: `${Math.random()}`,
  };

  arr_toDo.push(text);
}

function updateTodo() {
  console.log(arr_toDo);
}

addToDo("Помыть посуду");

updateTodo();

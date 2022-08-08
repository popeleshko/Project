const arrTodo = []; //создаем массив
const inputTodo = document.querySelector(".input"); //ввод задания
const btn = document.querySelector(".btn"); //кнопка
const outputTodo = document.querySelector(".output__form"); //вывод списка на странице

function addTodo(text) {
  //добавляем функцию добавления нового задания с параметром text
  const todo = {
    // создаем объект в котором будем хранить само задание, его статус (выполнен или нет) и уникальный айди что бы потом по нему можно было удалять
    text,
    status: false,
    id: `${Math.random()}`,
  };
  arrTodo.push(todo); //пушим в наш основной массив наш объект со всеми данными
}

function delTodo(id) {
  //удаляем (меняем статус задания)
  arrTodo.forEach((todo) => {
    // проходим по главному массиву и проверяем если айдишник который мы передали в параметре совпадает с айдишником из объекта, то меняем статус задания.
    if (todo.id === id) {
      todo.status = true;
    }
  });
}

function output() {
  // функция вывода информации на страницу
  let value = "";
  arrTodo.forEach((todo) => {
    //проходимся по циклу и проверяем: если статус выполнен - то возврат, в другом случае добавляем в наш вывод новый li и текст задания
    if (todo.status) {
      return;
    }
    value += `<li><div class="chk__txt"><input type="checkbox"><span class="text">${todo.text}</span></div>
    <button class="btn__li" data-id='${todo.id}'>Сделано</button></li>`;
  });
  outputTodo.innerHTML = value; // выводим в наш ul - li
}

btn.addEventListener("click", () => {
  // по нажатию на основую кнопку записываем данные из инпута в переменную text, потом вызываем функую addTodo и передаем параметр нашей переменной и после того как этого обновляем страницу
  const text = inputTodo.value;
  addTodo(text);
  output();
  inputTodo.value = "";
});

inputTodo.addEventListener("keypress", (event) => {
  //тоже самое что и предыдущее, только по нажатию на enter
  if (event.key === "Enter") {
    const text = inputTodo.value;
    addTodo(text);
    output();
    inputTodo.value = "";
  }
});

outputTodo.addEventListener("click", (event) => {
  //по нажатию на кнопки в заданиях проверяем что это действительно действие с кнопкной, если нет - то вовзрат. Если да то берем её айди и удаляем и обновляем страницу
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const id = event.target.dataset.id;
  delTodo(id);
  output();
});

/* 1. нужно вместо или вместе с li делать checkbox - готово; 2. Сделать кнопку удаления всех заданий сразу; 3. Сделать красивые стили. */

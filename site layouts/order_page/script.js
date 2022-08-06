const productChekbox = document.querySelectorAll('input[type="checkbox"]');
const productCount = document.querySelectorAll('.products input[type="text"]');
const resultElement = document.querySelector(".result");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const inputName = document.querySelector(".name");
const inputSurname = document.querySelector(".surname");

container.addEventListener("click", () => {
  let total = 0;
  for (let i = 0; i < productChekbox.length; i++) {
    if (productChekbox[i].checked) {
      total += productCount[i].value * productCount[i].dataset.price;
    }
  }
  resultElement.innerHTML = `Итого: ${total} руб.`;
});

for (let elem of productChekbox) {
  elem.addEventListener("click", () => {
    if (elem.checked) {
      elem.parentNode.lastElementChild.value = 1;
    } else {
      elem.parentNode.lastElementChild.value = 0;
    }
  });
}

btn.addEventListener("click", () => {
  alert(
    `Заказчик: ${inputName.value} ${inputSurname.value}\n${resultElement.innerHTML}`
  );
});

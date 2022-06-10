// Create some JavaScript to manage the increment and decrement of the counter
function increase() {
  let productQuantity = document.getElementById("quantity");
  let quantity = Number(productQuantity.value);
  productQuantity.value = quantity + 1;
}

function decrease() {
  let productQuantity = document.getElementById("quantity");

  let quantity = Number(productQuantity.value);

  productQuantity.value = quantity - 1;
}

let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");

decrement.addEventListener("click", decrease);
increment.addEventListener("click", increase);

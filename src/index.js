// Create some JavaScript to manage the increment and decrement of the counter

let productQuantity = document.getElementById("quantity");
let quantity = 0;
productQuantity.value = quantity;

function calcultatePrice() {
  let product1Price = 100;

  let price = document.getElementById("product-1-total-price");
  let totalPrice = product1Price * quantity;
  price.textContent = `Total price: ${totalPrice}`;
}

function increase() {
  if (quantity <= 9) {
    quantity++;
    productQuantity.value = quantity;
  }

  calcultatePrice();
}

function decrease() {
  if (quantity >= 1) {
    quantity--;
    productQuantity.value = quantity;
  }

  calcultatePrice();
}

let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");

decrement.addEventListener("click", decrease);
increment.addEventListener("click", increase);

// Create some JavaScript to manage the increment and decrement of the counter

let product1Quantity = document.getElementById("quantity-1");
let product2Quantity = document.getElementById("quantity-2");
let decrement1 = document.getElementById("decrement-1");
let increment1 = document.getElementById("increment-1");
let decrement2 = document.getElementById("decrement-2");
let increment2 = document.getElementById("increment-2");

let quantity1 = 0;
let quantity2 = 0;

product1Quantity.value = quantity1;
product2Quantity.value = quantity2;

function calcultatePrice() {
  let product1Price = 100;
  let product2Price = 50;

  let price = document.getElementById("total-price");
  let totalPrice = product1Price * quantity1 + product2Price * quantity2;
  price.textContent = `Total price: ${totalPrice}`;
}

function increase1() {
  if (quantity1 <= 9) {
    quantity1++;
    product1Quantity.value = quantity1;
  }

  calcultatePrice();
}

function decrease1() {
  if (quantity1 >= 1) {
    quantity1--;
    product1Quantity.value = quantity1;
  }

  calcultatePrice();
}

decrement1.addEventListener("click", decrease1);
increment1.addEventListener("click", increase1);

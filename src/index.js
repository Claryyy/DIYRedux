import { store } from "./store";

document.body.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

//TODO: subscribe to store for state and update DOM with updated values

store.subscribe(() => {
  console.log(store.getState());
});

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

decrement1.addEventListener("click", () => {
  store.dispatch({ type: "decrement", payload: "quantity1" });
});
increment1.addEventListener("click", () => {
  store.dispatch({ type: "increment", payload: "quantity1" });
});

decrement2.addEventListener("click", () => {
  store.dispatch({ type: "decrement", payload: "quantity2" });
});
increment2.addEventListener("click", () => {
  store.dispatch({ type: "increment", payload: "quantity2" });
});

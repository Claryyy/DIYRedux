import { store } from "./store";

function updateDOM() {
  const { quantity1, quantity2, totalPrice } = store.getState();
  price.textContent = `Total price: ${totalPrice}`;
  product1Quantity.value = quantity1;
  product2Quantity.value = quantity2;
}

//domContentLoaded to make sure all the content has been rendered
window.addEventListener("DOMContentLoaded", updateDOM);

let product1Quantity = document.getElementById("quantity-1");
let product2Quantity = document.getElementById("quantity-2");
let price = document.getElementById("total-price");
let decrement1 = document.getElementById("decrement-1");
let increment1 = document.getElementById("increment-1");
let decrement2 = document.getElementById("decrement-2");
let increment2 = document.getElementById("increment-2");

// subscribe to store for state and update DOM with updated values
store.subscribe(updateDOM);

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

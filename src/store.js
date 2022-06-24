import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  quantity1: 0,
  quantity2: 0,
  price1: 100,
  price2: 50,
  totalPrice: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      if (action.payload === "quantity1") {
        const newQuantity = state.quantity1 + 1;
        return Object.assign(state, {
          quantity1: newQuantity,
          totalPrice:
            state.price1 * newQuantity + state.price2 * state.quantity2,
        });
      }
      const newQuantity = state.quantity2 + 1;
      return Object.assign(state, {
        quantity2: newQuantity,
        totalPrice: state.price1 * state.quantity1 + state.price2 * newQuantity,
      });

    case "decrement":
      if (action.payload === "quantity1") {
        const newQuantity = state.quantity1 - 1;
        return Object.assign(state, {
          quantity1: newQuantity,
          totalPrice:
            state.price1 * newQuantity + state.price2 * state.quantity2,
        });
      }
      const newQuantity = state.quantity2 - 1;
      return Object.assign(state, {
        quantity2: newQuantity,
        totalPrice: state.price1 * state.quantity1 + state.price2 * newQuantity,
      });
    default:
      return state;
  }
}

export const store = configureStore({
  reducer,
});

import { configureStore } from "@reduxjs/toolkit";

function reducer(state = { count: 3 }, action) {
  switch (action.type) {
    case "Increment":
      return Object.assign({}, { count: state.count + 1 });
    case "Decrement":
      return Object.assign({}, { count: state.count - 1 });
    default:
      return state;
  }
}

export const store = configureStore({
  reducer,
});

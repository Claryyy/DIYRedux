function redux(reducer, initialState) {
  if (typeof reducer === "undefined" || typeof reducer !== "function") {
    throw new Error("redux requires a reducer function");
  }

  if (typeof initialState === "undefined") {
    throw new Error("redux requires an initialState");
  }

  let state = initialState;
  let subscribers = [];

  function subscribe(fn) {
    subscribers.push(fn);
  }

  function dispatch(action) {
    if (!action || typeof action !== "object" || !action.type) {
      throw new Error("dispatch requires an action type");
    }

    state = reducer(state, action);

    subscribers.forEach((fn) => fn());
  }

  function getState() {
    return state;
  }
  return { subscribe, dispatch, getState };
}

module.exports = redux;

function redux(reducer, initialState) {
  if (!reducer || typeof reducer !== "function") {
    throw new Error("redux requires a reducer function");
  }

  if (!initialState) {
    throw new Error("redux requires an initialState");
  }

  //TODO: getState method to test as it just returns the state

  function subscribe() {}
  function dispatch() {}
  function getState() {}
  return { subscribe, dispatch, getState };
}

module.exports = redux;

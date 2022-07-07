function redux(reducer, initialState) {
  if (!reducer || typeof reducer !== "function") {
    throw new Error("redux requires a reducer function");
  }

  if (!initialState) {
    throw new Error("redux requires an initialState");
  }

  let state = initialState;
  let subscribers = [];

  function subscribe(fn) {
    subscribers.push(fn);
    /**
     * Accepts a function
     * Store the functions passed to it in an array
     *  anytime the state updates fire these functions */
  }
  function dispatch(action) {
    //TODO: next thing to do so we can test the subscibe function too
    //Make sure subscriber function get called so we are sure the two are connected
    state = reducer(action);
  }

  function getState() {
    return state;
  }
  return { subscribe, dispatch, getState };
}

module.exports = redux;

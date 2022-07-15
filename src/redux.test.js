const redux = require("./redux");

describe("DIYRedux tests", () => {
  test("will throw an error if not passed a reducer function", () => {
    expect(() => {
      const store = redux();
    }).toThrow("redux requires a reducer function");
  });

  test("will throw an error if not passed an initialState", () => {
    const reducer = () => {};

    expect(() => {
      const store = redux(reducer);
    }).toThrow("redux requires an initialState");
  });

  test("should return 3 method calls when passed a reducer function", () => {
    const reducer = () => {};
    const initialState = "foo";

    const store = redux(reducer, initialState);

    expect(store).toHaveProperty("subscribe");
    expect(store).toHaveProperty("dispatch");
    expect(store).toHaveProperty("getState");
  });

  test("that the getState method returns the state", () => {
    const reducer = () => {};
    const initialState = "foo";

    const store = redux(reducer, initialState);

    expect(store.getState()).toEqual(initialState);
  });

  test("that our subscriber function is called when state is updated", () => {
    const reducer = () => {};
    const initialState = "foo";

    const subscriber = jest.fn();

    const store = redux(reducer, initialState);

    store.subscribe(subscriber);

    expect(subscriber).not.toHaveBeenCalled();

    store.dispatch({ type: "bar" });

    expect(subscriber).toHaveBeenCalled();
  });

  test("that the dispatch function takes in an action type", () => {
    const reducer = () => {};
    const initialState = "foo";

    const store = redux(reducer, initialState);

    expect(() => {
      store.dispatch(true);
    }).toThrow("dispatch requires an action type");
  });

  test("that the state updates when an action is dispatched", () => {
    const initialState = 0;

    const reducer = (state, action) => {
      switch (action.type) {
        case "increment": {
          return state + 1;
        }
        default:
          return state;
      }
    };

    const store = redux(reducer, initialState);

    expect(store.getState()).toEqual(0);

    store.dispatch({ type: "increment" });

    expect(store.getState()).toEqual(1);
  });
});

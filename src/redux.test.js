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

  //TODO: test for subscribe amd dispatch
});

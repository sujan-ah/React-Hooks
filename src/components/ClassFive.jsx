import React, { useReducer } from "react";

let initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { count: state.count + 1 };

    case "minus":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
    default:
      return state;
  }
}

const ClassFive = () => {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 style={{ color: "green" }}>Class Five</h1>
      <h3>Topic: useReducer</h3>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "plus" })}>Plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>Minus</button>
    </>
  );
};

export default ClassFive;

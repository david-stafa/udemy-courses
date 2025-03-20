const redux = require("redux");

// reducer function recieves two inputs - old state and dispatched action
// one output new state object
// should be pure function - same inputs leads to same output
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // method avaiable from store to get the latest state
  const latestState = store.getState();

  console.log(latestState);
};

store.subscribe(counterSubscriber);

// dispatch is javascript object with type property
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

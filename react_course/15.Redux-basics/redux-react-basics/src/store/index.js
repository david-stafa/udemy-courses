// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

// this creates object with type property with unique identifyer as value


export default store;

// OLD CODE WITH REDUCER
// reducer function recieves two inputs - old state and dispatched action
// one output new state object
// should be pure function - same inputs leads to same output
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// const counterSubscriber = () => {
//   // method avaiable from store to get the latest state
//   const latestState = store.getState();

//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// // dispatch is javascript object with type property
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });

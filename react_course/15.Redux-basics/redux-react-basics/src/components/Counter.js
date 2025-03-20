import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // use Selector automatically set up subscription to redux so this component recieves newest counter
  // useDispatch returns a dispatch function
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  // this function send value to redux
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

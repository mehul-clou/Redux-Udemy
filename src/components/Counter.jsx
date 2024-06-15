import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCounter, increase, increment, decrement } from "../Store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter:show } = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  function incrementHandler() {
    dispatch(increment());
  }

  function increaseHandler() {
    dispatch(increase(10));
  }

  function decreaseHandler() {
    dispatch(decrement());
  }

  return (
    <main className={classes.counter}>
    
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>increase</button>
        <button onClick={decreaseHandler}>decrease</button>
        <button onClick={increaseHandler}>increment by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

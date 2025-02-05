import React, {useContext} from "react";
import { CountContext } from "../context/CountContext";

function Button() {

  let {count, setCount} = useContext(CountContext);

  const increment = () => {
    setCount(++count);
  }
  
  function decrement() {
    setCount(--count);
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
    </>
  )
}

export default Button;
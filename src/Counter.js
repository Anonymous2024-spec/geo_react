import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {count}</h1>
      <div>
        <Button label="Increment" onClick={increment} backgroundColor="green" />
        <Button label="Decrement" onClick={decrement} backgroundColor="red" />
      </div>
    </div>
  );
}

export default Counter;

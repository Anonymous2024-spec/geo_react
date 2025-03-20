import { useState, useEffect } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count: {count}</h1>
      <div>
        <Button label="Increment" onClick={increment} backgroundColor="green" />
        <Button label="Decrement" onClick={decrement} backgroundColor="red" />
      </div>
    </div>
  );
}

export default Counter;

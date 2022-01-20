import React, { useState } from "react";

export default function Points() {
  let [count, setCount] = useState(0);
  const increment = () => setCount(count + 100);
  const decrement = () => setCount(count - 100);
  const add500 = () => setCount(count + 500);
  const sub500 = () => setCount(count - 500);
  const reset = () => setCount(0);

  return (
    <div className="Points-Container">
      <h3>count: {count}</h3>
      <button className="Points-Buttons" onClick={increment}>+ 100</button>
      <button className="Points-Buttons" onClick={decrement}>- 100</button>
      <button className="Points-Buttons" onClick={add500}>+ 500</button>
      <button className="Points-Buttons" onClick={sub500}>- 500</button>
      <button className="Points-Buttons" onClick={reset}>reset</button>
    </div>
  );
}

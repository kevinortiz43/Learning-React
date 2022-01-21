import React, { useState } from "react";

export default function Points(props) {
  let [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + props.points);
  const decrement = () => setCount((count) => count - props.points);
  const reset = () => setCount(0);

  return (
    <div className="Points-Container">
      <h3>count: {count}</h3>
      <button className="Points-Buttons" onClick={increment}>
        +
      </button>
      <button className="Points-Buttons" onClick={decrement}>
        -
      </button>
      <button className="Points-Buttons" onClick={reset}>
        reset
      </button>
    </div>
  );
}

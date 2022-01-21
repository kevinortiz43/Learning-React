import React, { useState } from "react";

export default function Points(props) {
  console.log(props)
  let [count, setCount] = useState(0);
  const increment100 = () =>setCount(count + 100);
  const decrement100 = () => setCount(count - 100);
  const increment500 = () => setCount(count + 500);
  const decrement500 = () => setCount(count - 500);
  const reset = () => setCount(0);

  return (
    <div className="Points-Container">
      <h3>count: {count}</h3>
      <button className="Points-Buttons" onClick={increment100}>+ 100</button>
      <button className="Points-Buttons" onClick={decrement100}>- 100</button>
      <button className="Points-Buttons" onClick={increment500}>+ 500</button>
      <button className="Points-Buttons" onClick={decrement500}>- 500</button>
      <button className="Points-Buttons" onClick={reset}>reset</button>
    </div>
  );
}

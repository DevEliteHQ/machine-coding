import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count-container">
      <div>Counter App</div>
      <div className="count-display">
        <button
          className="count-btn"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <span>{count}</span>
        <button
          className="count-btn"
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;

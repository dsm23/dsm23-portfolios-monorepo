"use client";

import { useState } from "react";
import Button from "~/components/button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="flex items-center gap-x-3">
      <Button onClick={handleDecrement}>-</Button>
      <div>{count}</div>
      <Button onClick={handleIncrement}>+</Button>
    </div>
  );
};

export default Counter;

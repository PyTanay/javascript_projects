import React, { useState, useEffect } from "react";

export default function FunctionalCounter() {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    console.log("executed useEffect!");
  }, [Count]);
  return (
    <div>
      <h1>The count:{Count}</h1>
      <button onClick={() => setCount(Count + 1)}>Increment</button>
    </div>
  );
}

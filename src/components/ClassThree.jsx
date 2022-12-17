import React, { useEffect, useState } from "react";

const ClassThree = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(1);

  useEffect(() => {
    document.title = `Count:${count2}`;
  }, [count2]);

  return (
    <>
      <h1 style={{ color: "green" }}>Class Three</h1>
      <h3>Topic: UseEffect</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h2>{count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>Click</button>
    </>
  );
};

export default ClassThree;

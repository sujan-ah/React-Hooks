// import React, { useEffect, useState } from "react";

// const ClassFour = () => {
//   let [name, setName] = useState("");
//   let [count, setCount] = useState(0);

//   // useEffect(() => {
//   //   setCount(count + 1);
//   // });

//   return (
//     <>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h1>Name: {name}</h1>
//       <h1> Render Count: {count}</h1>
//     </>
//   );
// };

// export default ClassFour;

// 2nd Step //

// import React, { useEffect, useRef, useState } from "react";

// const ClassFour = () => {
//   let [name, setName] = useState("");
//   console.log(name);

//   let count = useRef(20);

//   useEffect(() => {
//     console.log("ami render hoichi");
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h1>Name: {name}</h1>
//       <h1> Render Count: {count.current}</h1>
//     </>
//   );
// };

// export default ClassFour;

// 3rd Step //

// import React, { useEffect, useRef, useState } from "react";

// const ClassFour = () => {
//   let [name, setName] = useState("");

//   let count = useRef(50);

//   useEffect(() => {
//     console.log("ami render hoichi");
//   });

//   return (
//     <>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h1>Name: {name}</h1>
//       <h1> Render Count: {count.current}</h1>
//     </>
//   );
// };

// export default ClassFour;

// 4th Step //

import React, { useRef } from "react";

const ClassFour = () => {
  let changeDom = useRef();

  let handleClick = () => {
    changeDom.current.style.background = "red";
  };

  return (
    <>
      <h1 style={{ color: "green" }}>Class Four</h1>
      <h3>Topic: useRef</h3>
      <input ref={changeDom} />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default ClassFour;

// import React, { useState } from "react";

// const ClassOne = () => {
//   let [info, setInfo] = useState({
//     count: "",
//     name: "",
//   });

//   let handleClick = () => {
//     info.count++;
//     setInfo({ ...info, count: info.count });
//     console.log(info);
//   };

//   let handleChange = (e) => {
//     setInfo({ ...info, name: e.target.value });
//   };

//   return (
//     <>
//       <input type="text" onChange={handleChange} />
//       <h1>
//         {info.name} : {info.count}
//       </h1>
//       <button onClick={handleClick}>Click</button>
//     </>
//   );
// };

// export default ClassOne;

import React, { useState } from "react";

const ClassOne = () => {
  let [info, setInfo] = useState({
    count: "",
    name: "",
  });

  let handleClick = () => {
    info.count++;
    setInfo((prev) => ({
      ...prev,
      cont: info.count,
    }));
  };

  let handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  return (
    <>
      <h1 style={{ color: "green" }}>Class One </h1>
      <h3>Topic: UseState</h3>
      <input type="text" onChange={handleChange} />
      <h2>
        {info.name} : {info.count}
      </h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default ClassOne;

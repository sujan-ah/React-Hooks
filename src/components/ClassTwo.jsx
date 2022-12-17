import { useState } from "react";

const ClassTwo = () => {
  let [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(info);
  };
  return (
    <>
      <h1 style={{ color: "green" }}>Class Two</h1>
      <h3>Topic: UseState</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <br />
      <button>Submit</button>
    </>
  );
};

export default ClassTwo;

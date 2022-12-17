import ClassFive from "./components/ClassFive";
import ClassFour from "./components/ClassFour";
import ClassOne from "./components/ClassOne";
import ClassThree from "./components/ClassThree";
import ClassTwo from "./components/ClassTwo";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#B148D2" }}>React Hooks</h1>
      <ClassOne />
      <ClassTwo />
      <ClassThree />
      <ClassFour />
      <ClassFive />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(21);

  let addValue = () => {
    setCounter(counter + 1);
  };

  let decreaseValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>decrease Value</button>
    </>
  );
}

export default App;

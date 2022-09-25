import { useState } from "react";
import { Child } from "./Child";
import "./styles.css";

export default function App() {
  const [showName, setShowName] = useState(true);

  const toggle = () => {
    setShowName((_showName) => !showName);
  };
  return (
    <div className="App">
      {showName ? <h1>Arun</h1> : <h1>Ram</h1>}
      <Child toggle={toggle} />
    </div>
  );
}

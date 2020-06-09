import React, { useState } from "react";
import "./App.css";
import { ragify } from "./ragify";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>nErDrAgE</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>{ragify(text)}</p>
    </div>
  );
}

export default App;

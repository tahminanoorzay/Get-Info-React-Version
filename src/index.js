import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function GetName() {
  const [name, setName] = useState("");

  function handlerInput() {
    alert(name);
  }

  return (
    <div className="container">
      <div class="input-group">
        <input
          className="fInput"
          placeholder="Enter Someone"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="aBtn" onClick={handlerInput}>
          Add
        </button>
      </div>
    </div>
  );
}

function ShowResult() {
  return (
    <div className="showDetails">
      <div></div>
      <button>Delete</button>
    </div>
  );
}

function App() {
  return (
    <>
      <GetName />
      <ShowResult />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

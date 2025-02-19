import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function GetDetails({
  name,
  setName,
  lastName,
  setLastName,
  age,
  setAge,
  handlerAdd,
}) {
  return (
    <div className="container">
      <GetName name={name} setName={setName} handlerAdd={handlerAdd} />
      <GetLastName
        lastName={lastName}
        setLastName={setLastName}
        handlerAdd={handlerAdd}
      />
      <GetAge age={age} setAge={setAge} handlerAdd={handlerAdd} />
    </div>
  );
}

function GetName({ name, setName, handlerAdd }) {
  return (
    <div className="input-group">
      <input
        className="fInput"
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="aBtn" onClick={handlerAdd}>
        Add
      </button>
    </div>
  );
}

function GetLastName({ lastName, setLastName, handlerAdd }) {
  return (
    <div className="input-group">
      <input
        className="fInput"
        placeholder="Enter your last name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button className="aBtn" onClick={handlerAdd}>
        Add
      </button>
    </div>
  );
}

function GetAge({ age, setAge, handlerAdd }) {
  return (
    <div className=" input-group">
      <input
        className="fInput"
        placeholder="Enter your age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button className="aBtn" onClick={handlerAdd}>
        Add
      </button>
    </div>
  );
}

function ShowResult({
  name,
  setName,
  setDisplayName,
  showResult,
  setShowResult,
}) {
  function handlerDelate() {
    setName("");
    setDisplayName("");
    setShowResult(false);
  }

  return (
    <div className="">
      {showResult && (
        <div className="container">
          <div className="showDetails">
            <div>{name}</div>
            <input
              onClick={handlerDelate}
              type="button"
              className="dBtn"
              value="Delete"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayLastName, setDisplayLastName] = useState("");
  const [age, setAge] = useState("");
  const [displayAge, setDisplayAge] = useState("");
  const [showResult, setShowResult] = useState(false);

  function handlerAdd() {
    setDisplayName(name);
    setName("");
    setDisplayLastName(lastName);
    setLastName("");
    setDisplayAge(age);
    setAge("");
    setShowResult(true);
  }

  return (
    <>
      <GetDetails
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        age={age}
        setAge={setAge}
        handlerAdd={handlerAdd}
      />
      <ShowResult
        name={displayName}
        setName={setName}
        setDisplayName={setDisplayName}
        showResult={showResult}
        setShowResult={setShowResult}
        lastName={displayLastName}
        setLastName={setLastName}
        age={displayAge}
        setAge={setAge}
      />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

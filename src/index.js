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
      <div className="title">Please entar your information</div>
      <GetName name={name} setName={setName} />
      <GetLastName lastName={lastName} setLastName={setLastName} />
      <GetAge age={age} setAge={setAge} />
      <button className="aBtn" onClick={handlerAdd}>
        Add
      </button>
    </div>
  );
}

function GetName({ name, setName }) {
  return (
    <div className="input-group">
      <input
        className="fInput"
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

function GetLastName({ lastName, setLastName }) {
  return (
    <div className="input-group">
      <input
        className="fInput"
        placeholder="Enter your last name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
}

function GetAge({ age, setAge }) {
  return (
    <div className=" input-group">
      <input
        className="fInput"
        placeholder="Enter your age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
}

function ShowResult({
  name,
  setName,
  lastName,
  setLastName,
  age,
  setAge,
  showResult,
  setShowResult,
}) {
  function handlerDelate() {
    setName("");
    setLastName("");
    setAge("");
    setShowResult(false);
  }

  return (
    <div className="">
      {showResult && (
        <div className="container">
          <div className="showDetails">
            <div>Name: {name}</div>
            <div>Last name: {lastName}</div>
            <div>Age: {age}</div>
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

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
      <div className="title">Please enter your information</div>
      <div className="input-group">
        <input
          className="fInput"
          placeholder="Enter your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="fInput"
          placeholder="Enter your last name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="fInput"
          placeholder="Enter your age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <Button text="Add" onClick={handlerAdd} />
    </div>
  );
}

function ShowResult({ name, lastName, age, showResult, handlerDelete }) {
  return (
    <div>
      {showResult && (
        <div className="container">
          <div className="showDetails">
            <div>Name: {name}</div>
            <div>LastName: {lastName}</div>
            <div>Age: {age}</div>
            <Button text="Delete" onClick={handlerDelete} />
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ text, onClick }) {
  return (
    <button className={`${text === "Add" ? "aBtn" : "dBtn"}`} onClick={onClick}>
      {text}
    </button>
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
    setDisplayLastName(lastName);
    setDisplayAge(age);
    setName("");
    setLastName("");
    setAge("");
    setShowResult(true);
  }

  function handlerDelete() {
    setShowResult(false);
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
        lastName={displayLastName}
        age={displayAge}
        showResult={showResult}
        handlerDelete={handlerDelete}
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

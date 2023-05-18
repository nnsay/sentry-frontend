import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <button
          onClick={() => {
            console.log("test error");
            console.log("test error");
            throw new Error("test");
          }}
        >
          Throw error
        </button>
        <br />
        <button
          onClick={() => {
            setTimeout(() => {
              console.log("timeout error");
              console.log("timeout error");
              throw new Error("timeout");
            }, 1000);
          }}
        >
          Try catch error
        </button>
        <br />
      </header>
    </div>
  );
}

export default App;

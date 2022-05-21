import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryPayload } from '@my-namespace/simple-shared-data';
import DarkMode from "./react-dark-mode/src/DarkMode"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DarkMode />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => {
            fetch("http://localhost:3001/", {})
              .then((response) => response.json())
              .then((data: QueryPayload) => console.log(data.foo));
          }}
        >
          GET SOME DATA
        </button>
      </header>
    </div>
  );
}

export default App;

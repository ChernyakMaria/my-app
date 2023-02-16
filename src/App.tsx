import React from 'react';
import './App.css';
import HelloWorld from "./component/HelloWorld";
import Name from "./component/name";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HelloWorld></HelloWorld>
          <Name></Name>
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
      </header>
    </div>
  );
}

export default App;

import React, { Component } from "react";

import FetchEvent from "./components/FetchEvent";
import "./App.css";
import { render } from "@testing-library/react";

class Body extends Component {
  render() {
    return (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    );
  }
}

function App() {
  render();
  {
    return (
      <div className="App">
        <FetchEvent />
      </div>
    );
  }
}

export default App;

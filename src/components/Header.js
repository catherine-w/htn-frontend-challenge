import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 classname="App-title">Welcome to {this.props.title}</h1>
      </header>
    );
  }
}

export default Header;

import React from "react";
import "../assets/styles/style2.scss";
import logo from "../assets/img/logo.svg";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="Logo image" />
          <h1>React Template</h1>
        </header>
        <main>
          <p>Some text</p>
          <button>Click me!</button>
        </main>
      </div>
    );
  }
}

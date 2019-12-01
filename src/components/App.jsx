import React from "react";
import "../assets/styles/style2.scss";
import logo from "../assets/img/logo.svg";
import StyledButton from "./Button";
import Image from "./Image";

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
          <p>Styled Button</p>
          <StyledButton>StyledComponentsButton</StyledButton>
          <p>Rotating logo image</p>
          <Image />
        </main>
      </div>
    );
  }
}

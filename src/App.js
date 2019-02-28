import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="background-image">
        <div className="container search-bar">
          <h1>PITCHFORKED</h1>
          <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input placeholder="username" />
          </InputGroup>
        </div>
      </div>
    );
  }
}

const avatarStyle = {
  width: "100%",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  background: "blue"
};

export default App;

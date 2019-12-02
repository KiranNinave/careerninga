import React from "react";
import { Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Game of throne</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;

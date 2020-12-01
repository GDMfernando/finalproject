import Navbar from 'react-bootstrap/Navbar';
import { Nav, Form, Button, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'

class Menubar extends Component {
  render() {
    return (
      <div id="home">
        <Navbar collapseOnSelect expand="lg" className="menu">
          <Navbar.Brand className="logo" href="#home">BOOKLAND</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{ color: "white" }} href="#home">HOME</Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#availableBooks">BOOKS</Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#addBookForm">ADD BOOK</Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#contactPage">CONTACT</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Menubar;



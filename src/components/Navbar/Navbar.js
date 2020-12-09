import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import'./Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css"

let Navbar = () => {
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">The house of books</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">Inicio</Nav.Link>
        <Nav.Link href="#">Productos</Nav.Link>
        <Nav.Link href="#">Contacto</Nav.Link>       
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
}


export default Navbar 
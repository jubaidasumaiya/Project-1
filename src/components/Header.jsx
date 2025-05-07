import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg_main">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/Project-1/logo-one.png" alt="logo" style={{width:'50px'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav_main me-auto">
              <Nav.Link href="#hero">Home</Nav.Link>
              <Nav.Link href="#menu">Order</Nav.Link>
              <Nav.Link href="#special">Catagory</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
            <div className="btn d-flex gap-2">
              <button>Reserve Table</button>
              <button>Track Order</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>


  );
}

export default Header

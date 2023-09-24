import React from "react";
import logo from "../assets/3d-modified.png";
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
        <img src={logo} className="img-fluid logo" alt="brand" width="60px" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background: "white"}}/>
        <Navbar.Collapse id="basic-navbar-nav">
            <div style={{marginLeft: "auto"}}>
          <Nav>
            <a id="nav-links" href="#home">Home</a>
            <a id="nav-links" href="#about">About</a>
            <a id="nav-links" href="#skills">Skills</a>
            <a id="nav-links" href="#projects">Projects</a>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;

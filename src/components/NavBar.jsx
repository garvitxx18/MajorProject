import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/NavBar.css";
import Logo from "../assets/Final_Logo.png";
import Dilithium from "./Dilithium";

const NavBar = ({
  kyber,
  falcon,
  dilithium,
  sphincs,
  about,
  scrollToSection,
}) => {
  return (
    <>
      <Navbar className="NavBar-Block" bg="light-black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="300"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#kyber"
              className="nav-link-space"
              onClick={() => scrollToSection(kyber)}
            >
              Kyber
            </Nav.Link>
            <Nav.Link
              href="#falcon"
              className="nav-link-space"
              onClick={() => scrollToSection(falcon)}
            >
              Falcon
            </Nav.Link>{" "}
            <Nav.Link
              href="#dilithium"
              className="nav-link-space"
              onClick={() => scrollToSection(dilithium)}
            >
              Dilithium
            </Nav.Link>
            <Nav.Link
              href="#sphics+"
              className="nav-link-space"
              onClick={() => scrollToSection(sphincs)}
            >
              Sphincs+
            </Nav.Link>
          </Nav>
          <Nav pullRight>
            <Nav.Link
              href="#about"
              className="nav-link-space-about-us"
              onClick={() => scrollToSection(about)}
            >
              About Us
            </Nav.Link>
            <Navbar.Brand href="#home">G-26</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.svg";
import HeaderText from "../../assets/CENTRAL SENTIMENT.svg";

const Header = () => {
  return (
    <div>
      <div className="headermainfulldiv">
        <div className="headeruppermaindiv">
          <div className="headersingupbutton">SING UP</div>
          <div className="headerloginbutton">LOGIN</div>
        </div>
        <div>
          <Navbar
            collapseOnSelect
            className="headermaindiv"
            expand="lg"
            variant="dark"
          >
            <Container className="containerdiv">
              <Navbar.Brand href="#home">
                <img src={logo} className="logoimag" />
                <img src={HeaderText} className="headertextimg" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#deets" className="headertest">
                    HOME
                  </Nav.Link>
                  <Nav.Link href="#deets" className="headertest">
                    ABOUT US
                  </Nav.Link>
                  <Nav.Link href="#deets" className="headertest">
                    NEWS
                  </Nav.Link>
                  <Nav.Link href="#deets" className="headertest">
                    DONATION
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;

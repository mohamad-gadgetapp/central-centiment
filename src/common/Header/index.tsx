import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.svg";
import HeaderText from "../../assets/CENTRAL SENTIMENT.svg";

const Header = () => {
  let navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div>
      <div className="headermainfulldiv" id="myHeader">
        <div className="headeruppermaindiv">
          <div
            className="headersingupbutton"
            onClick={() => navigateTo("sign-up")}
          >
            SIGN UP
          </div>
          <div
            className="headerloginbutton"
            onClick={() => navigateTo("login")}
          >
            LOGIN
          </div>
        </div>
        <div>
          <Navbar
            collapseOnSelect
            className="headermaindiv"
            expand="lg"
            variant="dark"
          >
            <Container className="containerdiv">
              <Navbar.Brand href="/">
                <img src={logo} className="logoimag" alt="Company Logo" />
                <img
                  src={HeaderText}
                  className="headertextimg"
                  alt="Company Name"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="/" className="headertest">
                    HOME
                  </Nav.Link>
                  <Nav.Link href="/about-us" className="headertest">
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

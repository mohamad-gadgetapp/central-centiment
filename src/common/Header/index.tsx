import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "./style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.svg";
import HeaderText from "../../assets/CENTRAL SENTIMENT.svg";

const Header = () => {

  let navigate = useNavigate();
  // var header: any = document.getElementById("myHeader");
  // var sticky: number = header?.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header?.classList.add("sticky");
  //   } else {
  //     header?.classList.remove("sticky");
  //   }
  // }

  // useEffect(() => {
  //   myFunction();
  // }, [])

  const navigateSignUp = () => {
    navigate('/sign-up');
  }

  const navigateLogin = () => {
    navigate('/login');
  }

  return (
    <div>
      <div className="headermainfulldiv" id="myHeader">
        <div className="headeruppermaindiv">
          <div className="headersingupbutton" onClick={() => navigateSignUp()}>
            SIGN UP
          </div>
          <div className="headerloginbutton" onClick={() => navigateLogin()}>LOGIN</div>
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

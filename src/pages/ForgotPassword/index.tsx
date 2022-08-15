import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [checked, setChecked] = React.useState(true);
  const [email, setEmail] = useState("");
  const [validationStatus, setValidationStatus] = useState(false);

  let navigate = useNavigate();

  const handleChangeChk = () => {
    setChecked(!checked);
  };

  const navigateTo = (path: string) => {
    navigate(`/${path}`);
  };

  const validation = () => {
    if (email !== "") {
      setValidationStatus(true);
    } else {
      setValidationStatus(false);
    }
  };

  useEffect(() => {
    validation();
  }, [email]);

  return (
    <div className="main-container">
      <Container>
        <div className="textHeaderStyle">FORGOT PASSWORD</div>
        <div className="wel-come-style">
          NO WORRIES! <br />
          Enter your email address and we will send you the further
          instructions.
        </div>
        <div className="heroContainer">
          <input
            type="text"
            className="inputTextStyle"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className="back-to-login-container"
            onClick={() => navigateTo("login")}
          >
            Back to Login
          </div>
          <div className="button-div">
            <button
              onClick={() => console.log("You clicked on the pink circle!")}
              className="button"
              style={{
                backgroundColor: validationStatus ? "#2F64B4" : "#898989",
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;

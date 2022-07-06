import React from "react";
import "./style.css";
import { Form, Field } from "react-final-form";
import Button from "../../common/Button";

const Login = () => {
  const [checked, setChecked] = React.useState(true);
  const inputTextStyle = {
    width: "50%",
    height: "30px",
    paddingLeft: "8px",
    paddingTop: "6px",
    paddingBottom: "6px",
    border: "2px solid #164586",
    outline: "0px",
    backgroundColor: "#122A4B",
    color: "#fff",
    letterSpacing: "4px",
    fontFamily: "Inter",
    margin: "10px",
  };

  const handleChangeChk = () => {
    setChecked(!checked);
  };

  return (
    <div className="main-container">
      <div className="textHeaderStyle">SIGN IN</div>
      <div className="wel-come-Style">WELCOME BACK</div>
      <div className="heroContainer">
        <input
          type="text"
          style={inputTextStyle}
          placeholder="USERNAME / EMAIL"
        />
        <input type="text" style={inputTextStyle} placeholder="PASSWORD" />
        <div className="display-flex-container">
          <div className="check-box-container">
            <input
              className="checkBox"
              type="checkbox"
              onChange={handleChangeChk}
            />
            <div className="textStyle">Stayed Signed In</div>
          </div>
          <div className="check-box-container">
            <div className="textStyleForgot">Forgot Password?</div>
          </div>
        </div>
        <Button
          height="200px"
          onClick={() => console.log("You clicked on the pink circle!")}
          width="200px"
          children="I'm a pink circle!"
        />
      </div>
    </div>
  );
};

export default Login;

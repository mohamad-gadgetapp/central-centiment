import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import SocialButton from "../../common/SocialBtn";
import fbIcon from "../../assets/fb.png";
import googleIcon from "../../assets/google.png";
import weChatIcon from "../../assets/wechat.png";
import Container from "react-bootstrap/Container";

const Login = () => {
  const [checked, setChecked] = React.useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationStatus, setValidationStatus] = useState(false);

  let navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(`/${path}`);
  };

  const validation = () => {
    if (username !== "" && password !== "") {
      setValidationStatus(true);
    } else {
      setValidationStatus(false);
    }
  };

  useEffect(() => {
    validation();
  }, [username, password]);

  const handleChangeChk = () => {
    setChecked(!checked);
  };

  return (
    <div className="main-container">
      <Container>
        <div className="textHeaderStyle">SIGN IN</div>
        <div className="wel-come-style">WELCOME BACK</div>
        <div className="heroContainer">
          <input
            type="text"
            className="inputTextStyle"
            placeholder="USERNAME / EMAIL"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="inputTextStyle"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="display-flex-container">
            <div className="check-box-container">
              <input
                className="checkBox"
                type="checkbox"
                onChange={handleChangeChk}
              />
              <div className="textStyle">
                Stayed Signed In&nbsp;
                <span
                  className="textStyleForgot"
                  onClick={() => navigateTo("forgot-password")}
                >
                  {" "}
                  Forgot Password?
                </span>
              </div>
            </div>
          </div>
          <div className="button-div">
            <button
              onClick={() => console.log("You clicked on the pink circle!")}
              className="button"
              style={{
                backgroundColor: validationStatus ? "#2F64B4" : "#898989",
              }}
            >
              Sign In
            </button>
          </div>
          <div className="or-container">
            <div className="line-container" />
            <span className="line-container-or">OR</span>
            <div className="line-container" />
          </div>
          <div className="social-container-log-in">
            <div className="social-container-log-in-sub-div">
              <SocialButton
                socialBtn="socialBtnLogIn button-font-size"
                onClick={() => console.log("You clicked on the facebook!")}
                children="Log with FaceBook"
                img_url={fbIcon}
              />
              <SocialButton
                socialBtn="socialBtnLogIn button-font-size"
                onClick={() => console.log("You clicked on the google!")}
                children="Log with Google"
                img_url={googleIcon}
              />
              <SocialButton
                socialBtn="socialBtnLogIn button-font-size"
                onClick={() => console.log("You clicked on the We chat!")}
                children="Log with We Chat"
                img_url={weChatIcon}
              />
            </div>
          </div>
          <div className="text-container" onClick={() => navigateTo("sign-up")}>
            Dont’t have an account? Sign up now!
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;

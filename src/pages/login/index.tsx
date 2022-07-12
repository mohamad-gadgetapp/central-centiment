import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom"
import Button from "../../common/Button";
import { colors } from '../../common/color';
import SocialButton from "../../common/SocialBtn";
import fbIcon from "../../assets/fb.png"
import googleIcon from "../../assets/google.png"
import weChatIcon from "../../assets/wechat.png"
import Container from "react-bootstrap/Container";
import { inputTextStyle, disStyle } from "./style";

const Login = () => {

  const [checked, setChecked] = React.useState(true);
  let navigate = useNavigate();

  const navigateForgotPassword = () => {
    navigate('/forgot-password');
  }

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
          />
          <input
            type="text"
            className="inputTextStyle"
            placeholder="PASSWORD"
          />
          <div className="display-flex-container">
            <div className="check-box-container">
              <input className="checkBox" type="checkbox" onChange={handleChangeChk} />
              <div className="textStyle">Stayed Signed In&nbsp;<span className="textStyleForgot" onClick={() => navigateForgotPassword()}> Forgot Password?</span>
              </div>
            </div>
          </div>
          <div className="button-div">
            <button
              onClick={() => console.log("You clicked on the pink circle!")}
              className="button">Sign In</button>
          </div>
          <div className="or-container">
            <div className="line-container" />
            <span className="line-container-or">OR</span>
            <div className="line-container" />
          </div>
          <div className="social-container-log-in">
            <div className="social-container-log-in-sub-div" >
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
          <div className="text-container">
            Dont’t have an account? Sign up now!
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
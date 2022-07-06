import React from "react";
import "./style.css"
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

  const handleChangeChk = () => {
    setChecked(!checked)
  }

  return (
    <div className="main-container">
      <Container>
        <div className="textHeaderStyle">SIGN IN</div>
        <div className="wel-come-Style">WELCOME BACK</div>
        <div className="heroContainer">
          <input
            type="text"
            style={inputTextStyle}
            placeholder="USERNAME / EMAIL"
          />
          <input
            type="text"
            style={inputTextStyle}
            placeholder="PASSWORD"
          />
          <div className="display-flex-container">
            <div className="check-box-container">
              <input className="checkBox" type="checkbox" onChange={handleChangeChk} />
              <div className="textStyle">Stayed Signed In</div>
            </div>
            <div className="check-box-container">
              <div className="textStyleForgot">Forgot Password?</div>
            </div>
          </div>
          <div style={disStyle}>
            <Button
              color={colors.btnColor}
              height="50px"
              onClick={() => console.log("You clicked on the pink circle!")}
              width="400px"
              children="Sign In"
            />
          </div>
          <div className="or-container">
            <div className="line-container" />
            <div>OR</div>
            <div className="line-container" />
          </div>
          <div className="social-container">
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "150px",
            }}>
              <SocialButton
                height="40px"
                onClick={() => console.log("You clicked on the facebook!")}
                width="350px"
                children="Log with FaceBook"
                img_url={fbIcon}
              />
              <SocialButton
                height="40px"
                onClick={() => console.log("You clicked on the google!")}
                width="350px"
                children="Log with Google"
                img_url={googleIcon}
              />
              <SocialButton
                height="40px"
                onClick={() => console.log("You clicked on the We chat!")}
                width="350px"
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
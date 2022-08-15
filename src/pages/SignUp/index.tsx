import React, { useEffect, useState } from "react";
import "./style.css";
import SocialButton from "../../common/SocialBtn";
import fbIcon from "../../assets/fb.png";
import googleIcon from "../../assets/google.png";
import weChatIcon from "../../assets/wechat.png";
import Container from "react-bootstrap/Container";

const SignUp = () => {
  const [checked, setChecked] = useState(true);
  const [validationStatus, setValidationStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState<any>("");

  const validation = () => {
    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      mobileNumber !== "" &&
      mobileNumber !== NaN
    ) {
      setValidationStatus(true);
    } else {
      setValidationStatus(false);
    }
  };

  useEffect(() => {
    console.log("mob: ", mobileNumber);
    validation();
  }, [username, email, password, mobileNumber]);

  const handleChangeChk = () => {
    setChecked(!checked);
  };

  return (
    <div className="main-container">
      <Container>
        <div className="textHeaderStyle">JOIN NOW</div>
        <div className="wel-come-style">
          Central Sentiment features the sentiment statistics for cryptocurrency
          ICO market.
        </div>
        <div className="heroContainer">
          <input
            type="text"
            className="inputTextStyle"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="inputTextStyle"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="inputTextStyle"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="phone-number-SignUp">
            <select className="selectStyle" name="" id="">
              <option value="">+853</option>
              <option value="">+365</option>
              <option value="">+905</option>
            </select>
            <input
              type="number"
              className="inputTextStyleNumber"
              placeholder="MOBILE NO."
              onChange={(e: any) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="display-flex-container">
            <div className="check-box-container">
              <input
                className="checkBox"
                type="checkbox"
                onChange={handleChangeChk}
              />
              <div className="textStyle">
                I accept the&nbsp;
                <span className="textStyleForgot">
                  {" "}
                  Term & Conditions, Privacy Policy and Risk Disclosure.
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
              Create Account
            </button>
          </div>
          <div className="or-container">
            <div className="line-container" />
            <span className="line-container-or">OR</span>
            <div className="line-container" />
          </div>
          <div className="social-container-sign-up">
            <div className="social-container-sign-up-sub-div">
              <SocialButton
                socialBtn="socialBtnSignUp button-font-size"
                onClick={() => console.log("You clicked on the facebook!")}
                children="Log with FaceBook"
                img_url={fbIcon}
              />
              <SocialButton
                socialBtn="socialBtnSignUp button-font-size"
                onClick={() => console.log("You clicked on the google!")}
                children="Log with Google"
                img_url={googleIcon}
              />
            </div>
            <div className="social-container-sign-up-sub-div">
              <SocialButton
                socialBtn="socialBtnSignUp button-font-size"
                onClick={() => console.log("You clicked on the We chat!")}
                children="Log with We Chat"
                img_url={weChatIcon}
              />
              <button className="skip-button button-font-size">
                Skip and proceed as Guest
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;

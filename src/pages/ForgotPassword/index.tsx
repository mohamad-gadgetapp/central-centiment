import React from "react";
import "./style.css"
import Button from "../../common/Button";
import { colors } from '../../common/color';
import Container from "react-bootstrap/Container";
import { inputTextStyle, disStyle } from "./style";

const ForgotPassword = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChangeChk = () => {
        setChecked(!checked)
    }

    return (
        <div className="main-container">
            <Container>
                <div className="textHeaderStyle">FORGOT PASSWORD</div>
                <div className="wel-come-Style">NO WORRIES! <br />
                    Enter your email address and we will send you the further instructions.</div>
                <div className="heroContainer">
                    <input
                        type="text"
                        style={inputTextStyle}
                        placeholder="Enter your Email"
                    />
                    <div className="back-to-login-container">
                        Back to Login
                    </div>
                    <div style={disStyle}>
                        <Button
                            color={colors.btnColorSignUp}
                            height="50px"
                            onClick={() => console.log("You clicked on the pink circle!")}
                            width="400px"
                            children="Submit"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ForgotPassword;
import React, { useState } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";

const ThanksPage = () => {
  const [message, setMessage] = useState(
    "You will resive this password in short time so please wait for some time"
  );
  return (
    <div className="thankspagemaindiv">
      <Container>
        <div className="thankspagediv">
          <div className="thankstextdiv">THANK YOU</div>
          <div>{message}</div>
        </div>
      </Container>
    </div>
  );
};

export default ThanksPage;

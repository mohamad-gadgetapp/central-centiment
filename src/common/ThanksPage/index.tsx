import React, { useState } from "react";
import "./style.css";

const ThanksPage = () => {
  const [message, setMessage] = useState(
    "You will resive this password in short time so please wait for some time"
  );
  return (
    <div className="thankspagemaindiv">
      <div>
        <div>THANK YOU</div>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default ThanksPage;

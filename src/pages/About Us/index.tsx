import React, { useState } from "react";
import "./style.css";
import fbIcon from "../../assets/fb.png";
import instaIcon from "../../assets/instagram.png";
import Container from "react-bootstrap/Container";

const AboutUsPage = () => {
  return (
    <div className="main-container">
      <Container>
        <div className="textHeaderStyle">ABOUT US</div>
        <div className="wel-come-style">
          <p>
            Central Sentiment is a crypto-sentiment analysis platform for
            everyone. Our social interactive platform for all stakeholders with
            a relevant interest in the crypto-market to share their sentiment
            view on a particular cryptocurrency. We will use our state of the
            algorithm to provide an accurate Central Sentiment Index(CSI) for
            everyone to gauge the market’s sentiment! .
          </p>
          <p>
            We will also collect the sentiment from different social media
            platforms to perform Sentiment Analysis (Reddit, Telegram, Twitter)
            to provide a market’s sentiment index from users across different
            social media platforms!
          </p>
        </div>
        <div className="follow-us-div">FOLLOW US ON:</div>
        <div className="social-container-about-us">
          <div className="fb-insta-div">
            <img
              className="social-style-img"
              src={fbIcon}
              alt="facebook image"
            />
            <span className="social-id-span">Central Sentiment</span>
          </div>
          <div className="fb-insta-div">
            <img
              className="social-style-img"
              src={instaIcon}
              alt="facebook image"
            />
            <span className="social-id-span">@central_sentiment</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsPage;

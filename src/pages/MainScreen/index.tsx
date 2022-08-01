import React from "react";
import "./style.css";
import upArrow from "../../assets/Central Sentiment/up_arrow.svg";
import downArrow from "../../assets/Central Sentiment/down_arrow.svg";
import ReactSpeedometer from "react-d3-speedometer";

const cryptoArray = [
  {
    hash: 1,
    crypto: "Bitcoin",
    cryptoType: "BTC",
    sentiment: 25,
    hours: 0.53,
    days: 0.21,
    marketCap: "366,475,619,989",
    volume: "26,642,570,398",
    qty: "1,873,313",
    circulatingSupply: "19,908,256",
    lastDaysSentiment: "",
  },
  {
    hash: 2,
    crypto: "Ethereum",
    cryptoType: "ETH",
    sentiment: 80,
    hours: 0.53,
    days: 0.21,
    marketCap: "366,475,619,989",
    volume: "26,642,570,398",
    qty: "1,873,313",
    circulatingSupply: "19,908,256",
    lastDaysSentiment: "",
  },
  {
    hash: 3,
    crypto: "Tether",
    cryptoType: "USDT",
    sentiment: 80,
    hours: 0.53,
    days: 0.21,
    marketCap: "366,475,619,989",
    volume: "26,642,570,398",
    qty: "1,873,313",
    circulatingSupply: "19,908,256",
    lastDaysSentiment: "",
  },
  {
    hash: 4,
    crypto: "USD Coin",
    cryptoType: "USDC",
    sentiment: 25,
    hours: 0.53,
    days: 0.21,
    marketCap: "366,475,619,989",
    volume: "26,642,570,398",
    qty: "1,873,313",
    circulatingSupply: "19,908,256",
    lastDaysSentiment: "",
  },
  {
    hash: 5,
    crypto: "BNB",
    cryptoType: "BNB",
    sentiment: 25,
    hours: 0.53,
    days: 0.21,
    marketCap: "366,475,619,989",
    volume: "26,642,570,398",
    qty: "1,873,313",
    circulatingSupply: "19,908,256",
    lastDaysSentiment: "",
  },
  {
    hash: 6,
    crypto: "Binance USD",
    cryptoType: "BUSD",
    sentiment: 80,
    hours: 0.53,
    days: 0.21,
    marketCap: "366,475,619,989",
    volume: "26,642,570,398",
    qty: "1,873,313",
    circulatingSupply: "19,908,256",
    lastDaysSentiment: "",
  },
];

const MainScreen = () => {
  const [checked, setChecked] = React.useState(true);
  const [list, setList] = React.useState([...cryptoArray]);

  const handleChangeChk = () => {
    setChecked(!checked);
  };

  return (
    <div className="main-container">
      <div className="mid-div">
        <div className="left-part-div">
          <span className="wel-come-Style">
            Your Central Sentiment Index for Today:
          </span>
          <div className="meter-div">
            <ReactSpeedometer
              fluidWidth={true}
              minValue={0}
              maxValue={100}
              value={25}
              segments={2}
              maxSegmentLabels={1}
              segmentColors={["#A73320", "#13DA4B", "#4BAA6B"]}
              startColor="#A73320"
              endColor="#13DA4B"
              needleHeightRatio={0.8}
              ringWidth={30}
              needleColor="#C6C1C1"
            />
          </div>
          <span className="wel-come-Style">
            Top 10 market cap cryptos with sentiment indicators
          </span>
        </div>
        <div className="right-part-div">
          <div className="search-div">
            <input type="text" placeholder="Search Crypto Currency" />
            <svg
              className="search-icon"
              data-darkreader-inline-stroke=""
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className="text-div">
            <p className="wel-come-Style">Central Sentiment Index:</p>
            <p className="text-extreme-fear">EXTREME FEAR</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="data-main-div">
        <table className="title-table">
          <tbody>
            <tr className="title-row">
              <td className="table-data-hash">#</td>
              <td className="table-data-crypto">
                <span>Crypto</span>
              </td>
              <td className="table-data-sentiment">
                <span>Sentiment</span>
              </td>
              <td className="table-data-hours">
                <span>24h%</span>
              </td>
              <td className="table-data-days">7d%</td>
              <td className="table-data-marketCap">Market Cap</td>
              <td className="table-data-volume">
                Volume <br />
                (24h)
              </td>
              <td className="table-data-circulatingSupply">
                Circulating Supply
              </td>
              <td className="table-data-lastDaysSentiment">
                Last 7 Days Sentiment
              </td>
            </tr>
            {list.map((item, index) => {
              return (
                <tr className="title-row-data title-row" key={index}>
                  <td className="table-data-hash">{item.hash}</td>
                  <td className="table-data-crypto">
                    <span>{item.crypto}</span>
                    <br />
                    <span style={{ color: "#C6C1C1" }}>{item.cryptoType}</span>
                  </td>
                  <td className="table-data-sentiment">
                    {item.sentiment >= 50 && item.sentiment <= 100 ? (
                      <span style={{ color: "#A73320" }}>{item.sentiment}</span>
                    ) : (
                      <span style={{ color: "#2BA720" }}>{item.sentiment}</span>
                    )}
                  </td>
                  <td className="table-data-hours">
                    {item.hours >= 0.5 && item.hours <= 1 ? (
                      <span style={{ color: "#1EEA57" }}>
                        {item.hours}%&nbsp;
                        <img className="up-down-arrow" src={upArrow} />
                      </span>
                    ) : (
                      <span style={{ color: "#EA1E1E" }}>
                        {item.hours}%&nbsp;
                        <img className="up-down-arrow" src={downArrow} />
                      </span>
                    )}
                  </td>
                  <td className="table-data-days">
                    {item.days >= 0.5 && item.days <= 1 ? (
                      <span style={{ color: "#1EEA57" }}>
                        {item.days}%&nbsp;
                        <img className="up-down-arrow" src={upArrow} />
                      </span>
                    ) : (
                      <span style={{ color: "#EA1E1E" }}>
                        {item.days}%&nbsp;
                        <img className="up-down-arrow" src={downArrow} />
                      </span>
                    )}
                  </td>
                  <td className="table-data-marketCap">
                    <span>${item.marketCap}</span>
                  </td>
                  <td className="table-data-volume">
                    <span>${item.volume}</span>
                    <br />
                    <span style={{ color: "#C6C1C1" }}>{item.qty}</span>
                  </td>
                  <td className="table-data-circulatingSupply">
                    <span>{item.circulatingSupply}</span>&nbsp;
                    <span>{item.cryptoType}</span>
                  </td>
                  <td className="table-data-lastDaysSentiment">
                    <div className="meter-data">
                      <ReactSpeedometer
                        fluidWidth={true}
                        minValue={0}
                        maxValue={100}
                        value={item.sentiment}
                        segments={2}
                        maxSegmentLabels={1}
                        valueTextFontSize={`${
                          window.screen.width <= 1024 ? 10 : 12
                        }px`}
                        labelFontSize={`${
                          window.screen.width <= 1024 ? 10 : 12
                        }px`}
                        segmentColors={["#A73320", "#13DA4B", "#4BAA6B"]}
                        needleHeightRatio={0.7}
                        ringWidth={10}
                        needleColor="#C6C1C1"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainScreen;

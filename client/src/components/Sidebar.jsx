import React from "react";
import "./css/sidebar.css";
function Sidebar() {
  const intrestDetails = [
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Etherium",
      symbol: "ETH",
      intrest: "2.5",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Bitcoin",
      symbol: "BTC",
      intrest: "2.1",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Tether",
      symbol: "USDT",
      intrest: "2.7",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Solana",
      symbol: "SOL",
      intrest: "2.2",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Etherium",
      symbol: "ETH",
      intrest: "2.5",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Bitcoin",
      symbol: "BTC",
      intrest: "2.1",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Tether",
      symbol: "USDT",
      intrest: "2.7",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Solana",
      symbol: "SOL",
      intrest: "2.2",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Etherium",
      symbol: "ETH",
      intrest: "2.5",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Bitcoin",
      symbol: "BTC",
      intrest: "2.1",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Tether",
      symbol: "USDT",
      intrest: "2.7",
    },
    {
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Solana",
      symbol: "SOL",
      intrest: "2.2",
    },
  ];
  return (
    <div className="sidebar">
      <div className="head-row">
        <p className="head">Crypto</p>
        <p className="head">Interest Rate</p>
      </div>
      {intrestDetails.map((item, index) => (
        <div className="row">
          <div className="name">
            <img src={item.src} alt="" />
            {item.name} ({item.symbol})
          </div>
          <div className="interest">{item.intrest} %</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;

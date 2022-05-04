import React from "react";
import "./css/header.css";

function Header({ theme }) {
  return (
    <header style={{ backgroundColor: `${theme.accent}` }}>
      <div className="logo">RAH3Fi</div>
      <div className="user">
        <p className="address">0x74fE5C568394c573269705592603Ccf54914Ba04</p>
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
          alt=""
          className="avatar"
        />
      </div>
    </header>
  );
}

export default Header;

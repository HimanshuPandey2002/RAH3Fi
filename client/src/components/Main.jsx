import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Accounts from "./Accounts";
import Loan from "./Loan";
import "./css/main.css";

function Main() {
  const [isAcc, setIsAcc] = useState(true);

  return (
    <div className="main">
      <Sidebar />
      <div className="main-section">
        <div className="sec-changer">
          <button
            className={isAcc ? "btn active" : "btn"}
            onClick={() => setIsAcc(true)}
          >
            Account
          </button>
          <button
            className={isAcc ? "btn" : "btn active"}
            onClick={() => setIsAcc(false)}
          >
            Loan
          </button>
        </div>
        <div className="section">{isAcc ? <Accounts /> : <Loan />}</div>
      </div>
    </div>
  );
}

export default Main;

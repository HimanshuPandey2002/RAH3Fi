import "./App.css";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { theme } from "./global/Theme";
import KYCFrom from "./components/KYCFrom";
import Main from "./components/Main";

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  const getProvider = async () => {
    const pr = new ethers.providers.Web3Provider(window.ethereum);
    await pr.send("eth_requestAccounts", []);
    const sign = pr.getSigner();
    const resolver = await pr.getResolver("ricmoo.eth");
    console.log(resolver);
    console.log(pr);
  };

  useEffect(() => {
    getProvider();
  }, []);

  return (
    <div className="App">
      <Header theme={theme} />
      {isRegistered ? <Main theme={theme} /> : <KYCFrom theme={theme} />}
    </div>
  );
}

export default App;

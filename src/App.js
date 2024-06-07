import React from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import BreakingNews from "./Components/BreakingNews";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Picks from "./Components/Picks";
import "./Styles/App.css";

function App() {
  const executeScroll = () => {
    const mainSection = document.getElementById("main-section");
    mainSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navigation onMenuClick={executeScroll} />
      <BreakingNews />
      <Header />
      <Main />
      <Picks />
      <Footer />
    </div>
  );
}

export default App;

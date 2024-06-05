import React from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import BreakingNews from "./Components/BreakingNews";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import "./Styles/App.css";

function App() {
  return (
    <div>
      <Navigation />
      <BreakingNews />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

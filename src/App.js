import React from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import BreakingNews from "./Components/BreakingNews";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import LocationNews from "./Components/LocationNews";
import "./Styles/App.css";

function App() {
  return (
    <div>
      <Navigation />
      <BreakingNews />
      <Header />
      <Articles />
      <LocationNews />
      <Footer />
    </div>
  );
}

export default App;

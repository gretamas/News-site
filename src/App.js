import React from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import BreakingNews from "./Components/BreakingNews";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Navigation />
      <BreakingNews />
      <Header />
      <Main />
    </div>
  );
}

export default App;

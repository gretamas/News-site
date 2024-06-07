import React from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import BreakingNews from "./Components/BreakingNews";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Picks from "./Components/Picks";
import "./Styles/App.css";

function App() {
  const [category, setCategory] = React.useState("sports");

  function handleCategoryClick(newCategory) {
    setCategory(newCategory);
 }

  return (
    <div>
      <Navigation handleCategoryClick={handleCategoryClick} />
      <BreakingNews />
      <Header />
      <Main category={category}/>
      <Picks />
      <Footer />
    </div>
  );
}

export default App;

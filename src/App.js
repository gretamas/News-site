import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import BreakingNews from "./Components/BreakingNews";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Picks from "./Components/Picks";
import FullArticle from "./Components/FullArticle";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import "./Styles/App.css";

function App() {
  const [category, setCategory] = React.useState("sports");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [fullArticle, setFullArticle] = React.useState(null);

  function handleCategoryClick(newCategory) {
    handleBackToMain();
    setCategory(newCategory);
  }

  function handleLogIn() {
    console.log("Login successful");
    setIsLoggedIn(true);
  }

  function handleLogOut() {
    setIsLoggedIn(false);
  }

  function handleFullArticleClick(article) {
    setFullArticle(article);
  }

  const handleBackToMain = () => {
    setFullArticle(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn handleLogIn={handleLogIn} />} />
        <Route path="/signup" element={<SignUp handleLogIn={handleLogIn} />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <div>
                <Navigation
                  handleCategoryClick={handleCategoryClick}
                  handleLogOut={handleLogOut}
                  onBack={handleBackToMain}
                />
                {fullArticle ? (
                  <FullArticle article={fullArticle} onBack={handleBackToMain} />
                ) : (
                  <>
                    <BreakingNews onArticleClick={handleFullArticleClick} />
                    <Header />
                    <Main category={category} onArticleClick={handleFullArticleClick}/>
                    <Picks />
                  </>
                )}
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

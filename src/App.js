import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
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
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  function handleThemeChange() {
    setIsDarkMode((prevMode) => !prevMode);
  }

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
              <Box>
                <Navigation
                  handleCategoryClick={handleCategoryClick}
                  handleThemeChange={handleThemeChange}
                  isDarkMode={isDarkMode}
                  handleLogOut={handleLogOut}
                  onBack={handleBackToMain}
                />
                {fullArticle ? (
                  <FullArticle
                    article={fullArticle}
                    onBack={handleBackToMain}
                  />
                ) : (
                  <>
                    <BreakingNews onArticleClick={handleFullArticleClick} />
                    <Header
                      onArticleClick={handleFullArticleClick}
                      isDarkMode={isDarkMode}
                    />
                    <Main
                      category={category}
                      onArticleClick={handleFullArticleClick}
                      isDarkMode={isDarkMode}
                    />
                    <Picks
                      onArticleClick={handleFullArticleClick}
                      isDarkMode={isDarkMode}
                    />
                  </>
                )}
                <Footer />
              </Box>
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

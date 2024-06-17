import React, { useState, useEffect } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import '../Styles/BreakingNews.css';

function BreakingNews({ onArticleClick }) {
  const [article, setArticle] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=77a37f96b90143a487fc78bafb60bb94`
        );
        const data = await response.json();
        if (data?.articles?.length) {
          setArticle(data.articles[0]);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchArticle();
  }, []);

  return (
    <Box className={`breaking-news-container ${isMobile ? 'mobile' : ''}`}>
      <Button
        onClick={() => onArticleClick(article)}
        className="breaking-news-button"
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "rgb(192, 20, 20)",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        BREAKING NEWS
      </Button>
      <Typography className="breaking-news-title" variant="body1" gutterBottom>
        {article.title}
      </Typography>
    </Box>
  );
}

export default BreakingNews;

import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import "../Styles/BreakingNews.css"

function BreakingNews() {

  const [article, setArticle] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=e1bef1f913474c1b9baf0a58a4147a5d`
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
    <Box className="breaking-news">
      <Button className="breaking-news__btn"
      variant="contained"
      sx={{
        backgroundColor: 'white',
        color: 'rgb(192, 20, 20)',
        '&:hover': {
          backgroundColor: 'white',
        }
      }}>
        BREAKING NEWS
      </Button>
      <Box className="breaking-news__text-wrapper">
      <Typography variant="body1" className="breaking-news__text">
      {article.title}
    </Typography>
      </Box>
    </Box>
  );
}

export default BreakingNews;
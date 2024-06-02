import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

function BreakingNews() {

  const [article, setArticle] = useState("");

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
    
    <Box
      sx={{
        backgroundColor: 'rgb(192, 20, 20)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10,
        padding: 2
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: 'rgb(192, 20, 20)',
          '&:hover': {
            backgroundColor: 'white',
          }
        }}
      >BREAKING NEWS
      </Button>
      <Typography variant="body5" gutterBottom>
              {article.title}
            </Typography>
    </Box>
  );
}

export default BreakingNews;

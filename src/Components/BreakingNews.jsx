import React, { useState, useEffect } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
    <Box
      sx={{
        backgroundColor: "rgb(192, 20, 20)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: isMobile ? "column" : "row",
        columnGap: isMobile ? 0 : 10,
        padding: 2,
        textAlign: isMobile ? "center" : "left",
      }}
    >
      <Button
        onClick={() => onArticleClick(article)}
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "rgb(192, 20, 20)",
          "&:hover": {
            backgroundColor: "white",
          },
          marginBottom: isMobile ? 2 : 0,
        }}
      >
        BREAKING NEWS
      </Button>
      <Typography variant="body1" gutterBottom>
        {article.title}
      </Typography>
    </Box>
  );
}

export default BreakingNews;

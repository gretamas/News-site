import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography, Grid, Divider, CardActionArea } from "@mui/material";
import moment from 'moment';
import countryCodes from "./CountryCodes";
import "../Styles/Articles.css";

function Articles({ location, category, onArticleClick, isDarkMode}) {
  const [articles, setArticles] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const countryCode = Object.keys(countryCodes).find(code => countryCodes[code].toLowerCase() === location.toLowerCase()) || 'us';
        const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=7828a72879be4399b0995f0c785c1c60`;
        const response = await fetch(url);
        const data = await response.json();
        if (data?.articles?.length) {
          const filteredArticles = data.articles.filter(article => article.urlToImage);
          setArticles(filteredArticles);
          setDisplayCount(4);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [location, category]);

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 4);
  };

  return (
    <Box className="articles-container">
      <Grid container spacing={3}>
        {articles.slice(0, displayCount).map((article, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CardActionArea onClick={() => onArticleClick(article)}>
              <Card sx={{ bgcolor: isDarkMode ? '#102a43' : 'white', color: isDarkMode ? 'white' : 'black' }}>
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="210"
                    image={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '200px' }}>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ overflow: "hidden", textOverflow: "ellipsis", display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                      {article.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ overflow: "hidden", textOverflow: "ellipsis", display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                      {article.description}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">{article.author}</Typography>
                    <Typography variant="body2">
                      {moment(article.publishedAt).fromNow()}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      {displayCount < articles.length && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            className="load-more-btn"
            variant="outlined"
            size="large"
            onClick={handleLoadMore}
            sx={{ mt: 2, borderColor: isDarkMode ? 'white' : '#c31815', color: isDarkMode ? 'white' : '#c31815', bgcolor: 'transparent', "&:hover": { borderColor: isDarkMode ? 'white' : '#c31815', backgroundColor: '#f6e7e7', color: isDarkMode ? '#102a43' : '#c31815', transform: 'scale(1.05)' } }}
          >
            SEE MORE
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Articles;

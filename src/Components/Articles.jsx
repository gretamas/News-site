import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { CardActionArea } from '@mui/material';
import countryCodes from "./CountryCodes";
import moment from 'moment';

function Articles({ location, category, onArticleClick}) {
  const [articles, setArticles] = useState([]);
  const [displayCount, setDisplayCount] = useState(4); 

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const countryCode = Object.keys(countryCodes).find(code => countryCodes[code].toLowerCase() === location.toLowerCase()) || 'us'; 
        
        const url= `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=77a37f96b90143a487fc78bafb60bb94`
      
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
      <Box maxWidth={700}>
        <Grid container spacing={3}>
          {articles.slice(0, displayCount).map((article, index) => (
            <Grid item xs={12} sm={6} key={index}>
               <CardActionArea onClick={() => onArticleClick(article)}> 
              <Card>
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="210"
                    image={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <CardContent  sx={{ height: 200, overflow: "hidden" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                  >
                    {article.description}
                  </Typography>
                  <Divider />
                  <Box
                    mt={1}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
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
            variant="outlined"
            size="large"
            onClick={handleLoadMore}
            sx={{ mt: 2,  borderColor: '#c31815', color: '#c31815', "&:hover": {borderColor: '#c31815', backgroundColor: '#f6e7e7', transform: 'scale(1.05)'}}}
          >
            SEE MORE
          </Button>
        </Box>
      )}
      </Box>
  );
}

export default Articles;

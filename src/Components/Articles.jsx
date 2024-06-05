import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import moment from 'moment';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [displayCount, setDisplayCount] = useState(4); 

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=77a37f96b90143a487fc78bafb60bb94`
      );
      const data = await response.json();
      if (data?.articles?.length) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 4); 
  };

  return (
    <Box maxWidth={950} >
      <Box>
        <Grid container spacing={2}>
          {articles.slice(0, displayCount).map((article, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{width: 440, height: 520}}>
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="270"
                    image={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <CardContent  sx={{ height: 300, overflow: "hidden" }}>
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
                  <Box display="flex" justifyContent="center" mt={3} mb={2}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => window.open(article.url, "_blank")}
                  >
                    READ MORE
                  </Button>
                  </Box>
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
            </Grid>
          ))}
        </Grid>
      </Box>
      {displayCount < articles.length && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="outlined"
            size="large"
            onClick={handleLoadMore}
            sx={{ mt: 2 }}
          >
            SEE MORE
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Articles;

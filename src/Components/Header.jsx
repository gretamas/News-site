import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Card, CardContent, CardMedia} from '@mui/material';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

function Header() {
  const [article, setArticle] = useState(null);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=e1bef1f913474c1b9baf0a58a4147a5d`
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

  const handleFavoriteClick = () => {
    setIsFavoriteActive(!isFavoriteActive);
  };

  const handleBookmarkClick = () => {
    setIsBookmarkActive(!isBookmarkActive);
  };

  return (
    <Box sx={{ padding: 10 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" sx={{ color: 'rgb(192, 20, 20)' }}>Trending</Typography>
        <Box>
          <IconButton onClick={handleFavoriteClick}>
            <FavoriteBorderOutlinedIcon sx={{ color: isFavoriteActive ? 'rgb(192, 20, 20)' : 'inherit' }} />
          </IconButton>
          <IconButton onClick={handleBookmarkClick}>
            <BookmarkBorderOutlinedIcon sx={{ color: isBookmarkActive ? '#cc930e' : 'inherit' }} />
          </IconButton>
        </Box>
      </Box>
      {article && (
        <>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {article.title}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="500"
              image={article.urlToImage}
              alt={article.title}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                {article.description}
              </Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body2">{article.author}</Typography>
                <Typography variant="body2">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
}

export default Header;

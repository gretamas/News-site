import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Card, CardContent, CardMedia, CardActionArea} from '@mui/material';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import useMediaQuery from '@mui/material/useMediaQuery';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';

function Header({onArticleClick, isDarkMode}) {
  const [article, setArticle] = useState(null);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `${proxyUrl}https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=7828a72879be4399b0995f0c785c1c60`
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
    <Box sx={{ padding: isMobile ? 1 : 10 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" sx={{ color: isDarkMode ? 'white' :'rgb(192, 20, 20)'}}>Trending</Typography>
        <Box>
        <IconButton onClick={handleFavoriteClick}>
        <FavoriteBorderOutlinedIcon
          sx={{
            color: isFavoriteActive 
              ? 'rgb(192, 20, 20)' 
              : isDarkMode 
                ? 'white' 
                : 'black'
          }}
        />
      </IconButton>
      <IconButton onClick={handleBookmarkClick}>
        <BookmarkBorderOutlinedIcon
          sx={{
            color: isBookmarkActive 
              ? '#cc930e' 
              : isDarkMode 
                ? 'white' 
                : 'black'
          }}
        />
      </IconButton>
        </Box>
      </Box>
      {article && (
        <>
        <CardActionArea onClick={() => onArticleClick(article)}> 
          <Card sx={{bgcolor: isDarkMode ? '#102a43' : 'white', color: isDarkMode ? 'white' : 'black'}}>
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
                  {moment(article.publishedAt).fromNow()}
                </Typography>
              </Box>
            </CardContent>
          </Card>
          </CardActionArea>
        </>
      )}
    </Box>
  );
}

export default Header;
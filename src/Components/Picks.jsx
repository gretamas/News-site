import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Picks({ onArticleClick, isDarkMode }) {

  let settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
              breakpoint: 1000,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  };

  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
      try {
          const response = await fetch(
              `https://newsapi.org/v2/everything?q=trendy&apiKey=9862bae58a22497ca87e41257767dff4`
          );
          const data = await response.json();
          if (data?.articles?.length) {
              setArticles(data.articles.slice(0, 5));
          }
      } catch (error) {
          console.error("Error fetching articles:", error);
      }
  };

  useEffect(() => {
      fetchArticles();
  }, []);

  return (
      <Box sx={{ width: '80%', margin: '0 auto'}}>
          <Typography variant="h5" gutterBottom>
              Editor's Picks
              <StarIcon />
          </Typography>
          <Slider {...settings}>
              {articles.map((article, index) => (
                <CardActionArea onClick={() => onArticleClick(article)}> 
                  <Card key={index} sx={{ border: 'none', boxShadow: 'none', margin: '10px', backgroundColor: 'transparent'}}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: { xs: 'auto', sm: 250 }, width: '100%', overflow: 'hidden', boxShadow: 3 }}>
                          <CardMedia
                              component="img"
                              sx={{ width: { xs: '100%', sm: '50%' }, height: { xs: 200, sm: '100%' }, objectFit: 'cover' }}
                              image={article.urlToImage}
                              alt={article.title}
                          />
                          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: { xs: '100%', sm: '50%' }, color: isDarkMode ? 'white' : 'black'  }}>
                              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                  {article.title}
                              </Typography>
                              <Typography variant="body2">
                                  {article.description}
                              </Typography>
                          </CardContent>
                      </Box>
                  </Card>
                  </CardActionArea>
              ))}
          </Slider>
      </Box>
  );
}

export default Picks;
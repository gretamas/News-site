import React, { useState, useEffect } from "react";
import {Box, Typography, Card, CardMedia, CardContent} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 

function Picks(){

    var settings = {
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
              breakpoint: 768,
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
          `https://newsapi.org/v2/everything?q=trendy&apiKey=e1bef1f913474c1b9baf0a58a4147a5d`
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
  

    return(
<Box>
      <Typography variant="h5" gutterBottom>
        Editor's Picks
        <StarIcon />
      </Typography>
      <Slider {...settings}>
        {articles.map((article, index) => (
          <Card key={index} sx={{border: 'none', boxShadow: 'none', width: { xs: '100%', sm: 500 }, height: 250, margin: '10px', backgroundColor: 'transparent'}}>
            <Box sx={{ display: 'flex', height: '100%' }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '40%', sm: 210 }, height: '100%' }}
              image={article.urlToImage}
              alt={article.title}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '1' }}>
              <Typography variant="h6" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {article.description}
              </Typography>
            </CardContent>
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
    )
}

export default Picks;
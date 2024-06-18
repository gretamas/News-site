import React, { useEffect } from "react";
import { Box, Button, Container, Typography, useTheme, useMediaQuery } from "@mui/material";
import moment from 'moment';
import "../Styles/FullArticle.css";
import line from "../images/line.svg";

function FullArticle({ article, onBack, isDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container className="full-article-section">
      <Button
        onClick={onBack}
        variant="outlined"
        sx={{
          mb: 2,
          mt: 2,
          borderColor: isDarkMode ? 'white' : "#c31815",
          color: isDarkMode ? 'white' : "#c31815",
          "&:hover": {
            borderColor: isDarkMode ? 'white' : '#c31815',
            color: isDarkMode ? '#102a43' : '#c31815',
            backgroundColor: "#f6e7e7",
            transform: "scale(1.05)",
          },
        }}
      >
        Back to Articles
      </Button>
      <Box className="full-article__background" 
        sx={{
          py: 4,
          height: isMobile ? "0px" : "410px",
          visibility: isMobile ? "hidden" : "visible", 
        }}
      ></Box>
      <Box
        className="full-article__content"
        sx={{
          position: "relative",
          zIndex: 1,
          mt: { xs: 0, sm: 0, md: -40 },
          p: { xs: 0, sm: 1 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            color: isMobile ? '#0e1e32' : 'white',
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {article.title}
        </Typography>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: 410,
            objectFit: "cover",
            mb: 2,
          }}
          src={article.urlToImage}
          alt={article.title}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="body2" color={isDarkMode ? "white" : "black"}>
            {article.author || "Unknown Author"}
          </Typography>
          <Typography variant="body2">
            {moment(article.publishedAt).fromNow()}
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          {article.description}
        </Typography>
        <Box className="full-article__subtitle" sx={{ my: 3, p: 2, textAlign: "center" }}>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis necessitatibus rerum suscipit debitis? Et labore eligendi praesentium, id error temporibus iusto quisquam.
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom sx={{ mt: 1 }}>
          {article.content}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <Typography sx={{ mt: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostru.
          </Typography>
        </Typography>
        <Box className="full-article-image-section" sx={{ flexDirection: isMobile ? "column" : "row" }}>
        <img
            src="https://picsum.photos/550/300"
            alt="Additional poster" 
            className="full-article-image"
            style={{ width: isMobile ? "100%" : "auto" }}
          />
          <Box className="full-article-image-comment" sx={{ mt: isMobile ? 2 : 0 }}>
            <img src={line} alt="Decoration Line" />
            <Typography sx={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  
              <span style={{ color: "#C31815" }}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
            </Typography>
          </Box>
        </Box> 
        <Typography sx={{ mt: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </Box>
    </Container>
  );
}

export default FullArticle;

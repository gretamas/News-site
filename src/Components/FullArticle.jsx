import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import "../Styles/FullArticle.css"

function FullArticle({ article, onBack }) {
  if (!article) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container className="full-article-section" >
      <Button onClick={onBack} variant="outlined" sx={{ mb: 2, borderColor: '#c31815', color: '#c31815', "&:hover": { borderColor: '#c31815', backgroundColor: '#f6e7e7' } }}>
        Back to Articles
      </Button>
    <Box className="full-article__background" sx={{ py: 4 }}></Box>
      <Box className="full-article__content" sx={{ position: 'relative', zIndex: 1, mt: -40, p: 3}}>
        <Typography variant="h3" sx={{ mb: 2, color: 'white'}}>
          {article.title}
        </Typography>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: 410,
            objectFit: 'cover',
            mb: 2,
          }}
          src={article.urlToImage}
          alt={article.title}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {article.author || 'Unknown Author'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(article.publishedAt).toLocaleDateString()}
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          {article.description}
        </Typography>
      <Box className="full-article__subtitle" sx={{ my: 3, p: 2, textAlign: 'center' }}>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis necessitatibus rerum suscipit debitis? Et labore eligendi praesentium, id error temporibus iusto quisquam.
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        {article.content}
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </Box>
    </Container>
  );
}

export default FullArticle;

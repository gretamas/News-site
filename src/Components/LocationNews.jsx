import React, { useState } from "react";
import { Card, Button, Typography, TextField, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../Styles/LocationNews.css";

function LocationNews({ onLocationChange, isDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [location, setLocation] = useState("");

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    onLocationChange(location);
    setLocation("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        ...(isMobile && { marginTop: 4, marginBottom: 4, justifyContent: 'center'}),
      }}
    >
      <Card
        className="location-news"
        sx={{
          bgcolor: isDarkMode ? '#102a43' : 'white',
          padding: 2,
          width: isMobile ? "100%" : "auto",
          maxWidth: isMobile ? 400 : "auto",
        }}
      >
        <Typography variant="h5" className="location-news__title" sx={{color: isDarkMode ? 'white' : '#c31815'}}>
          Location News
        </Typography>
        <TextField
          className="location-news__input"
          id="location-news__input"
          label="Search for a location"
          size="small"
          value={location}
          onChange={handleInputChange}
          fullWidth
          sx={{
            marginBottom: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: isDarkMode ? 'white' : 'black',
              },
              '&:hover fieldset': {
                borderColor: isDarkMode ? 'white' : 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: isDarkMode ? 'white' : 'black',
              },
            },
            '& .MuiInputLabel-root': {
              color: isDarkMode ? 'white' : 'black',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: isDarkMode ? 'white' : 'black',
            },
            '& .MuiOutlinedInput-input': {
              color: isDarkMode ? 'white' : 'black',
            },
          }}
        />
        <Button
          onClick={handleSubmit}
          className="location-news__btn"
          variant="outlined"
          sx={{
            borderColor: isDarkMode ? 'white' : '#c31815',
            color: isDarkMode ? 'white' : '#c31815',
            "&:hover": {
              borderColor: isDarkMode ? 'white' : '#c31815',
              color: isDarkMode ? '#102a43' : '#c31815',
              backgroundColor: "#f6e7e7",
              transform: "scale(1.05)",
            },
          }}
        >
          SUBMIT
        </Button>
      </Card>
    </Box>
  );
}

export default LocationNews;

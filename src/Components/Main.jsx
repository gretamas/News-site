import React, {useState} from "react";
import {Box} from "@mui/material";
import Articles from "./Articles";
import LocationNews from "./LocationNews";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "../Styles/Main.css"


function Main({category, onArticleClick, isDarkMode}){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [location, setLocation] = useState('');

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
      };

    return(
      <Box id="main-section" className='main-section-container'>
     <Box className = {isMobile ? "main-section--mobile" : "main-section"}>
<Articles location={location} category={category} onArticleClick={onArticleClick} isDarkMode={isDarkMode} className="main-section__articles"/>
<LocationNews onLocationChange={handleLocationChange} isDarkMode={isDarkMode} className="main-section__location-input"/>
     </Box>
     </Box>
    )
}

export default Main;
import React, {useState} from "react";
import {Box} from "@mui/material";
import Articles from "./Articles";
import LocationNews from "./LocationNews";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "../Styles/Main.css"


function Main({category}){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [location, setLocation] = useState('');

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
      };

    return(
     <Box id="articles-section" className = {isMobile ? "main-section--mobile" : "main-section"}>
<Articles location={location} category={category} className="main-section__articles"/>
<LocationNews onLocationChange={handleLocationChange} className="main-section__location-input"/>
     </Box>
    )
}

export default Main;
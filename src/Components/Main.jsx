import React, {useState} from "react";
import {Box} from "@mui/material";
import Articles from "./Articles";
import LocationNews from "./LocationNews";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "../Styles/Main.css"


function Main(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [location, setLocation] = useState('');

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
      };

    return(
     <Box className = {isMobile ? "main-section--mobile" : "main-section"}>
<Articles location={location} className="main-section__articles"/>
<LocationNews onLocationChange={handleLocationChange} className="main-section__location-input"/>
     </Box>
    )
}

export default Main;
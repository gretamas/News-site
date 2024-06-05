import React from "react";
import {Box} from "@mui/material";
import Articles from "./Articles";
import LocationNews from "./LocationNews";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "../Styles/Main.css"

function Main(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return(
     <Box className = {isMobile ? "main-section--mobile" : "main-section"}>
<Articles/>
<LocationNews/>
     </Box>
    )
}

export default Main;
import React from "react";
import {Box} from "@mui/material";
import Articles from "./Articles";
import LocationNews from "./LocationNews";
import "../Styles/Main.css"

function Main(){
    return(
     <Box className="main-section">
<Articles/>
<LocationNews/>
     </Box>
    )
}

export default Main;
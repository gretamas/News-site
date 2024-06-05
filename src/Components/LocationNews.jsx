import React from "react";
import {Card, Button, Typography, TextField} from "@mui/material";
import "../Styles/LocationNews.css"

function LocationNews (){
    return(
            <Card className="location-news">
            <Typography variant="h5" className="location-news__title">Location News</Typography>
                <TextField
          className="location-news__input"
          id="location-input"
          label="Search for a location"
          size="small"
          sx={{"&:focus": {color: '#c31815'}}}
        />
          <Button className="location-news__btn" variant="outlined" sx={{ borderColor: '#c31815', color: '#c31815', "&:hover": {borderColor: '#c31815', backgroundColor: '#f6e7e7', transform: 'scale(1.05)'}}}>
          SUBMIT
        </Button>
        </Card>  
    )
}

export default LocationNews;

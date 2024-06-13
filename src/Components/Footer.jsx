import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import logoBW from "../images/logoBW.svg";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function Footer (){

  const copyright = String.fromCodePoint(169);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

return(
   <Box
   mt={10}
   sx={{
    height: isMobile ? 300 : 250,
    backgroundColor: '#0E1E32',
    color: 'white',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: isMobile ? 0 : 10,
    rowGap: isMobile ? 3 : 0,
    padding: 2
  }}>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 1}}>
    <img src={logoBW} alt="Logo" style={{ height: 40 }} />
    <Typography variant="body2">
    copyright {copyright} 2024 | NBC NEWS
    </Typography>
    </Box>
    <Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'space-around', columnGap: 2}}>
    <Typography>About Us</Typography>
    <Typography>Contacts</Typography>
    <Typography>Careers</Typography>
    <Typography>Coupons</Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'space-around', padding: 2}}>
    <IconButton sx={{color: 'white'}}><TwitterIcon/></IconButton>
    <IconButton sx={{color: 'white'}}><FacebookIcon/></IconButton>
    <IconButton sx={{color: 'white'}}><InstagramIcon/></IconButton>
        </Box>
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', rowGap: 1}}>
    <Typography variant="body2">
    Privacy Policy
    </Typography>
    <Typography variant="body2">
    Terms of Service
    </Typography>
    <Typography variant="body2">
    Privacy Policy
    </Typography>
    </Box>
   </Box>
)
}

export default Footer;
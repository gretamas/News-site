import React from "react";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logoBW from "../images/logoBW.svg";
import '../Styles/Footer.css';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={`footer-container ${isMobile ? 'mobile' : ''}`}>
      <Box className="footer-section">
        <img src={logoBW} alt="Logo" className="footer-logo" />
        <Typography variant="body2">
          &copy; 2024 | NBC NEWS
        </Typography>
      </Box>
      <Box className="footer-section">
        <Box className="footer-links">
          <Link href="#about-us" underline="none" sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)'}}}>About Us</Link>
          <Link href="#contacts" underline="none" sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)'}}}>Contacts</Link>
          <Link href="#careers"  underline="none" sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)'}}}>Careers</Link>
          <Link href="#coupons"  underline="none" sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)'}}}>Coupons</Link>
        </Box>
        <Box className="footer-social">
          <Link href="https://twitter.com" target="_blank" >
            <IconButton sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)' } }}>
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link href="https://facebook.com" target="_blank" >
            <IconButton sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)' } }}>
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <IconButton sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)' } }}>
              <InstagramIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Box className="footer-section">
        <Link href="#privacy-policy" underline="none" sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)'}}}>Privacy Policy</Link>
        <Link href="#terms-of-service" underline="none" sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)'}}}>Terms of Service</Link>
        <Link href="#privacy-policy" underline="none" sx={{ color: 'white', '&:hover': { color: '#c31815', transform: 'scale(1.1)'}}}>Privacy Policy</Link>
      </Box>
    </Box>
  );
}

export default Footer;

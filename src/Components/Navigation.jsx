import React from 'react';
import { AppBar, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip, Container, Box, Switch} from '@mui/material';
import { PersonAdd, Settings, Logout, Menu as MenuIcon, Person } from '@mui/icons-material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from "../images/logo.svg";
import logoBW from "../images/logoBW.svg";
import "../Styles/Navigation.css";

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    borderBottom: '1px solid rgb(192, 20, 20)',
  },
}));


function Navigation({handleCategoryClick, handleThemeChange, isDarkMode, handleLogOut, onBack}){

  
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  
  
  const openUser = Boolean(anchorElUser);
  const openMenu = Boolean(anchorElMenu);

  const handleUserClick = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleMenuClick = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseUser = () => {
    setAnchorElUser(null);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleDropDownMenu = (category) => {
    onBack();
    handleCategoryClick(category);
    setAnchorElMenu(null);
  }

  const handleLogOutBtn = () => {
    handleLogOut();
    handleCloseMenu();
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <AppBar 
    position="sticky"
    sx = {{
      backgroundColor: isDarkMode ? '#0E1E32' : 'white',
      height: '80px'
    }}>
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <Link onClick={onBack}>
          <img src={isDarkMode ? logoBW : logo} alt="Logo" style={{ height: 40 }} />
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile ? (
              <Tooltip title="Menu">
                <IconButton
                  onClick={handleMenuClick}
                  size="medium"
                  sx={{ ml: 2 }}
                  aria-controls={openMenu ? 'main-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? 'true' : undefined}
                >
                  <MenuIcon sx = {{height: 18, width: 18, color: isDarkMode ? 'white' : 'black'}}/>
                </IconButton>
              </Tooltip>
            ) : (
              < >
                <ScrollLink  to="main-section" smooth={true} duration={500}>
                  <CustomMenuItem onClick={() => handleCategoryClick('politics')} sx={{color: isDarkMode ? 'white' : 'black'}}>Politics</CustomMenuItem>
                </ScrollLink>
                <ScrollLink to="main-section" smooth={true} duration={500}>
                  <CustomMenuItem onClick={() => handleCategoryClick('business')} sx={{color: isDarkMode ? 'white' : 'black'}}>Business</CustomMenuItem>
                </ScrollLink>
                <ScrollLink to="main-section" smooth={true} duration={500}>
                  <CustomMenuItem onClick={() => handleCategoryClick('sports')} sx={{color: isDarkMode ? 'white' : 'black'}}>Sports</CustomMenuItem>
                </ScrollLink>
                <ScrollLink to="main-section" smooth={true} duration={500}>
                  <CustomMenuItem onClick={() => handleCategoryClick('health')} sx={{color: isDarkMode ? 'white' : 'black'}}>Health</CustomMenuItem>
                </ScrollLink>
                <ScrollLink to="main-section" smooth={true} duration={500}>
                  <CustomMenuItem onClick={() => handleCategoryClick('entertainment')} sx={{color: isDarkMode ? 'white' : 'black'}}>Entertainment</CustomMenuItem>
                </ScrollLink>
              </>
            )}
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleUserClick}
                size="medium"
                sx={{ ml: 2 }}
                aria-controls={openUser ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openUser ? 'true' : undefined}
              >
                <Person sx = {{height: 18, width: 18, color: isDarkMode ? 'white' : 'black'}}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        {/* User Menu */}
        <Menu
          anchorEl={anchorElUser}
          id="account-menu"
          open={openUser}
          onClose={handleCloseUser}
          onClick={handleCloseUser}
          PaperProps={{
            elevation: 0,
            sx: {
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleCloseUser}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem component={Link} to="/signup" onClick={handleCloseUser}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleCloseUser}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogOutBtn}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
             <Box className='navigation-theme-switch-box '>
              <LightModeOutlinedIcon/><Switch size="small" color="grey" className='navigation-mode-switch'defaultChecked checked={isDarkMode} onClick={handleThemeChange}/><DarkModeOutlinedIcon/>
             </Box>
            </ListItemIcon>
          </MenuItem>
        </Menu>
        {/* Main Menu */}
        <Menu
          anchorEl={anchorElMenu}
          id="main-menu"
          open={openMenu}
          onClose={handleCloseMenu}
          onClick={handleCloseMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <ScrollLink to="main-section" smooth={true} duration={500}>
                  <MenuItem onClick={() => handleDropDownMenu('politics')}>Politics</MenuItem>
                </ScrollLink>
                <ScrollLink to="main-section" smooth={true} duration={500}>
                  <MenuItem onClick={() => handleDropDownMenu('business')}>Business</MenuItem>
                </ScrollLink>
                <ScrollLink to="main-section" smooth={true} duration={500}>
                  <MenuItem onClick={() => handleDropDownMenu('sports')}>Sports</MenuItem>
                </ScrollLink>
                <ScrollLink to="main-section" smooth={true} duration={500}>
                  <MenuItem onClick={() => handleDropDownMenu('health')}>Health</MenuItem>
                </ScrollLink>
                <ScrollLink to="main-section" smooth={true} duration={500}>
                  <MenuItem onClick={() => handleDropDownMenu('entertainment')}>Entertainment</MenuItem>
                </ScrollLink>
        </Menu>
      </Container>
    </AppBar>
  );
}

export default Navigation;
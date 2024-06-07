import React, { useState } from 'react';
import { AppBar, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip, Container, Box } from '@mui/material';
import { PersonAdd, Settings, Logout, Menu as MenuIcon, Person } from '@mui/icons-material';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import logo from "../images/logo.svg";

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    borderBottom: '1px solid rgb(192, 20, 20)',
  },
}));

const DropdownMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    border: '1px solid rgb(192, 20, 20)',
  },
}));

function Navigation({ onMenuClick }) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', height: '80px' }}>
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <img src={logo} alt="Logo" style={{ height: 40 }} />
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
                  <MenuIcon sx={{ height: 18, width: 18 }} />
                </IconButton>
              </Tooltip>
            ) : (
              <>
                <CustomMenuItem onClick={onMenuClick}>Politics</CustomMenuItem>
                <CustomMenuItem onClick={onMenuClick}>Business</CustomMenuItem>
                <CustomMenuItem onClick={onMenuClick}>Sports</CustomMenuItem>
                <CustomMenuItem onClick={onMenuClick}>World</CustomMenuItem>
                <CustomMenuItem onClick={onMenuClick}>Travel</CustomMenuItem>
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
                <Person sx={{ height: 18, width: 18 }} />
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
          <DropdownMenuItem onClick={handleCloseUser} >
            <Avatar /> My account
          </DropdownMenuItem>
          <Divider />
          <DropdownMenuItem onClick={handleCloseUser}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCloseUser}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCloseUser}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </DropdownMenuItem>
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
          <DropdownMenuItem onClick={onMenuClick}>Politics</DropdownMenuItem>
          <DropdownMenuItem onClick={onMenuClick}>Business</DropdownMenuItem>
          <DropdownMenuItem onClick={onMenuClick}>Sports</DropdownMenuItem>
          <DropdownMenuItem onClick={onMenuClick}>World</DropdownMenuItem>
          <DropdownMenuItem onClick={onMenuClick}>Travel</DropdownMenuItem>
        </Menu>
      </Container>
    </AppBar>
  );
}

export default Navigation;

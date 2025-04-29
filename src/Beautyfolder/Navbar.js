import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ladylogo from './images/lady logo.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleLogoClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActive = (path) => {
    if (path === '/beautytable') {
      return (
        location.pathname === '/beautytable' ||
        location.pathname === '/beautyview' ||
        location.pathname === '/beautyedit' ||
        location.pathname === '/beautyRegister'
      );
    }
    return location.pathname === path;
  };

  return (
    <Box>
      <AppBar position="static" color="primary" sx={{ width: '100vw', left: 0 }}>
        <Toolbar sx={{ px: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <IconButton edge="start" color="inherit" onClick={handleLogoClick} sx={{ mr: 1 }}>
              <img src={ladylogo} alt="Logo" style={{ height: 40, borderRadius: '50%' }} />
            </IconButton>
            <Typography variant="subtitle1" component="div" sx={{ fontSize: '1.1rem' }}>
              BeautyParlour
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
            <Button
              component={Link}
              to="/beautycategory"
              sx={{
                fontSize: '1.1rem',
                color: isActive('/beautycategory') ? 'white' : 'inherit',
                backgroundColor: isActive('/beautycategory') ? 'secondary.main' : 'transparent',
                borderRadius: 2,
                px: 3,
                '&:hover': {
                  backgroundColor: isActive('/beautycategory') ? 'secondary.dark' : 'primary.dark',
                },
              }}
            >
         Serivces
            </Button>
            
            <Button
              component={Link}
              to="/beautytable"
              sx={{
                fontSize: '1.1rem',
                color: isActive('/beautytable') ? 'white' : 'inherit',
                backgroundColor: isActive('/beautytable') ? 'secondary.main' : 'transparent',
                borderRadius: 2,
                px: 3,
                '&:hover': {
                  backgroundColor: isActive('/beautytable') ? 'secondary.dark' : 'primary.dark',
                },
              }}
            >
              Customers
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
            <Button
              component={Link}
              to="/beautylogin"
              sx={{
                fontSize: '1.1rem',
                color: isActive('/beautylogin') ? 'white' : 'inherit',
                backgroundColor: isActive('/beautylogin') ? 'secondary.main' : 'transparent',
                borderRadius: 2,
                px: 3,
                '&:hover': {
                  backgroundColor: isActive('/beautylogin') ? 'secondary.dark' : 'primary.dark',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import Logo from '/appImg/Logo.png'
import { Link, useLocation } from 'react-router-dom';
import DrawerContent from './DrawerContent';
import Navlist from './Navlist';
import ToggleAuth from './ToggleAuth';

const logoStyle = {
  width: '30px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBarRelative() {
  const location = useLocation();
  return (
    <AppBar
      position="relative"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        zIndex: 40
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
          })}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            {/* Logo Here */}
            <Landmark/>          
            {/* Navigation Here */}
            {(location.pathname === '/' || location.pathname.startsWith("/user")) && (
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Navlist />
              </Box>
            )}
          </Box>
          {/* Tools Here */}
          <Tools/>
          {/* Toggle Side Menu Here */}
          <MenuDrawer/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Tools() {

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        gap: 0.5,
        alignItems: 'center',
      }}
    >
      <ToggleColorMode/>
      <ToggleAuth/>
    </Box>
  )
}

function Landmark() {
  return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
    }}
    >
      <img
          src={Logo}
          style={logoStyle}
          alt="logo of sitemark"
      />
      <Button component={Link} to="/" sx={{fontSize: 21, fontWeight: 'bold'}}>
        Wisker Ways
      </Button>
    </Box>
  )
}

function MenuDrawer() {
  
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: { sm: '', md: 'none' } }}>
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={() => setOpen(true)}
        sx={{ minWidth: '30px', p: '4px' }}
      >
        <MenuIcon />
      </Button>

      <DrawerContent open={open} setopen={setOpen}/>
    </Box>
  )
}

export default AppAppBarRelative;
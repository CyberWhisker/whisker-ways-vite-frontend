// Layout.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {StickyFooter, AppAppBar} from '../components'
import { Box } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    default: {
      main: 'dark'
    }, 
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Master = ({ children }) => {
  const themeMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : "dark"; // Default to dark mode

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppAppBar />
      <Box >
        {children}
      </Box>
      <Box sx={{marginTop: 5}}>
        <StickyFooter/>
      </Box>
    </ThemeProvider>
  );
};

export default Master;

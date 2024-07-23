// Layout.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {StickyFooter} from '../components'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MasterAuth = ({ children }) => {
  const themeMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : "dark"; // Default to dark mode

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
      <div className='bottom-0 w-full'>
        <StickyFooter/>
      </div>
    </ThemeProvider>
  );
};

export default MasterAuth;

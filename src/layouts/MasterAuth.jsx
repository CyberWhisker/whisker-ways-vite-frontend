// Layout.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {StickyFooter, AppAppBar} from '../components'

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

const Master = ({ children }) => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('mode') ? localStorage.getItem('mode') : "dark"); // Default to dark mode

  const toggleColorMode = () => {
    const newThemeMode = themeMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem("mode", newThemeMode)
    setThemeMode(newThemeMode);
  };

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
      <div className=' lg:absolute bottom-0 w-full'>
        <StickyFooter/>
      </div>
    </ThemeProvider>
  );
};

export default Master;

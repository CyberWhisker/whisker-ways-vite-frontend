// Layout.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {StickyFooter, AppAppBar, StaticTopBar, StaticSideBar} from '../components'

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

const MasterAdmin = ({ children }) => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('mode') ? localStorage.getItem('mode') : "dark"); // Default to dark mode

  const toggleColorMode = () => {
    const newThemeMode = themeMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem("mode", newThemeMode)
    setThemeMode(newThemeMode);
  };

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className='flex p-5 w-full h-screen gap-10'>
        <div style={{width: 400}}>
            <StaticSideBar/>
        </div>
        <div className='flex flex-col w-full'>
            <div className='w-full'>
                <StaticTopBar mode={themeMode} toggleColorMode={toggleColorMode} />
                <div className='p-8'>
                    {children}
                </div>
            </div>
        </div>
      </div>
      <div className='mt-10'>
        <StickyFooter/>
      </div>
    </ThemeProvider>
  );
};

export default MasterAdmin;

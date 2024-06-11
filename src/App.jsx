import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/AppAppBar';
import {LandingHero , LadingFinder} from './pages/Landing';

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

export default function App() {
  const [themeMode, setThemeMode] = useState('dark'); // Default to dark mode

  const toggleColorMode = () => {
    const newThemeMode = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newThemeMode);
  };

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppAppBar mode={themeMode} toggleColorMode={toggleColorMode} />
      <section id='hero'>
        <LandingHero />
      </section>
      <section id='finder'>
        <LadingFinder />
      </section>
    </ThemeProvider>
  );
}

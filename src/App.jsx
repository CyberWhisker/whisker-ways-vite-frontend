import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/AppAppBar';
import Hero from './pages/Landing/Hero';

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
      <section id='features'>
        <Hero />
      </section>
      <section id='testimonials'>
        <Hero />
      </section>
    </ThemeProvider>
  );
}

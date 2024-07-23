// Layout.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {StickyFooter, AppAppBarRelative} from '../components'
import Sidebar from '../components/Sidebar';
import { Container, Grid } from '@mui/material';

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
  const themeMode= localStorage.getItem('mode') ? localStorage.getItem('mode') : "dark"; // Default to dark mode

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Grid container>
        {/* Sidebar Grid Item */}
        <Grid item xs={12} md={2.5} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Sidebar />
        </Grid>

        {/* Main Content Grid Item */}
        <Grid item xs={12} md={9.5} gap={2} mt={2}>
          <AppAppBarRelative/>
          <Container sx={{minHeight: '100vh', mt: 2}}>
            {children}
          </Container>
          <StickyFooter />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MasterAdmin;

import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode() {
  const [themeMode, setThemeMode] = React.useState(localStorage.getItem('mode') ? localStorage.getItem('mode') : "dark"); // Default to dark mode
  const toggleColorMode = () => {
    const newThemeMode = themeMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem("mode", newThemeMode)
    setThemeMode(newThemeMode);
    window.location.reload();
  };
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        {themeMode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="small" />
        ) : (
          <ModeNightRoundedIcon fontSize="small" />
        )}
      </Button>
    </Box>
  );
}

export default ToggleColorMode;
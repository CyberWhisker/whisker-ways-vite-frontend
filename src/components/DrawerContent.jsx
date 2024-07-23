import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Box, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Navlist from './Navlist';
import ToggleAuth from './ToggleAuth';
import ToggleColorMode from './ToggleColorMode';

function DrawerContent({open, setopen}) {
  const location = useLocation();
  return (
    <Drawer anchor="right" open={open} onClose={() => setopen(false)}>
      <Paper
      sx={{
      minWidth: '60dvw',
      p: 2,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
      }}
      >
        <Box sx={{justifyContent: 'end', display: 'flex'}}>
          <ToggleColorMode/>
        </Box>
        <Navlist setopen={setopen}/>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
          <ToggleAuth/>
        </Box>
      </Paper>
    </Drawer>
  )
}

export default DrawerContent
import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Box, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Navlist from './Navlist';

function DrawerContent({open, setopen}) {
  const location = useLocation();
  return (
    <Drawer anchor="right" open={open} onClose={() => setopen(false)}>
      <Paper
      sx={{
      minWidth: '60dvw',
      p: 2,
      flexGrow: 1,
      }}
      >
        <Navlist setopen={setopen}/>
      </Paper>
    </Drawer>
  )
}

export default DrawerContent
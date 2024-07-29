import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Box, Card, Divider, MenuItem, Paper, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Navlist from './Navlist';
import ToggleAuth from './ToggleAuth';
import ToggleColorMode from './ToggleColorMode';
import { Person } from '@mui/icons-material';

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
        <Divider/>
        <ChatList/>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
          <ToggleAuth/>
        </Box>
      </Paper>
    </Drawer>
  )
}

function ChatList() {
  const ChatData = [
    {
      name: "Chat Name"
    },
    {
      name: "Chat Name"
    },
    {
      name: "Chat Name"
    },
    {
      name: "Chat Name"
    },
    {
      name: "Chat Name"
    },
    {
      name: "Chat Name"
    },
    {
      name: "Chat Name"
    },
    {
      name: "Chat Name"
    },
  ]
  return (
    <Box>
      {ChatData.map((item, index) => (
        <MenuItem key={index} sx={{borderRadius: '20px'}} component={Link} to="/forum/message">
          <Box
          sx={{
              borderRadius: "50%",
              overflow: "hidden",
              width: 30,
              height: 30,
              marginRight: 2,
          }}
          >
              <Person sx={{width: '100%', height: '100%'}}/>
          </Box>
          <Typography color='primary.main'>{item.name}</Typography>
        </MenuItem>
      ))}
    </Box>
  )
}

export default DrawerContent
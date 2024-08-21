import { Logout, Person, Person2 } from '@mui/icons-material';
import { Avatar, Button, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { red } from '@mui/material/colors';

function handleLogout() {
  localStorage.setItem("userType", null)
  window.location.reload();
} 

function ToggleAuth() {
  return (
    <React.Fragment>
      {localStorage.getItem('userType') == "null" ? (
        <React.Fragment>
          <Button
          color="primary"
          variant="outlined"
          size="small"
          component={Link}
          to="/login"
          >
              Sign In
          </Button>
          <Button
          color="primary"
          variant="contained"
          size="small"
          component={Link}
          to="/register"
          >
              Sign Up
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <BasicMenu/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar 
      id="basic-button"
      alt="Profile" 
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      sx={{
        cursor: 'pointer'
      }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem component={Link} to='/profile'>
          <ListItemIcon><Person/></ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon><Logout/></ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ToggleAuth
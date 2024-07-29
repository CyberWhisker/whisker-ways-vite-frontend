import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

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
          <Button
          onClick={handleLogout}
          variant="contained"
          size="small"
          color="error"
          >
            Logout
          </Button>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default ToggleAuth
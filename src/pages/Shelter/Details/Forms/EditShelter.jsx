import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

function EditShelter() {
    const [toggleEditProfile, setToggleEditProfile] = useState(true);
  return (
    <div className='space-y-3'>
        <div className='flex justify-between'>
          <Typography>
            <label className='font-bold text-4xl'>Hello, Username</label>
          </Typography>
          {toggleEditProfile ? (
            <Button variant='contained' color='warning' onClick={() => setToggleEditProfile(!toggleEditProfile)}>Edit Profile</Button>
          ): (
            <Button variant='contained' onClick={() => setToggleEditProfile(!toggleEditProfile)}>Save Changes</Button>
          )}
        </div>
        <Form toggleEditProfile={toggleEditProfile}/>
    </div>
  )
}

function Form({toggleEditProfile}) {
    return (
      <div className='space-y-3'>
        <TextField variant='outlined' size='small' label='First Name' sx={{width: '100%'}} disabled={toggleEditProfile}/>
        <TextField variant='outlined' size='small' label='Last Name' sx={{width: '100%'}} disabled={toggleEditProfile}/>
        <TextField variant='outlined' size='small' label='Email' sx={{width: '100%'}} disabled={toggleEditProfile}/>
        <TextField variant='outlined' size='small' label='Password' sx={{width: '100%'}} disabled={toggleEditProfile}/>
        <TextField variant='outlined' size='small' label='City' sx={{width: '100%'}} disabled={toggleEditProfile}/>
        <TextField variant='outlined' size='small' label='ZIP code' sx={{width: '100%'}} disabled={toggleEditProfile}/>
      </div>
    )
  }

export default EditShelter
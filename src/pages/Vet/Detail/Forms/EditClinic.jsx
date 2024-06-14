import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

function EditClinic() {
    const [toggleEditProfile, setToggleEditProfile] = useState(true);
  return (
    <div className='space-y-3'>
        <div className='flex justify-between'>
          <Typography>
            <label className='font-bold text-4xl'>Veterinary Clinic Details</label>
          </Typography>
          {toggleEditProfile ? (
            <Button variant='contained' color='warning' onClick={() => setToggleEditProfile(!toggleEditProfile)}>Edit Clinic</Button>
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
      <div className='space-y-5'>
        <TextField variant='outlined' size='small' label='Clinic ID' sx={{width: '100%'}} disabled/>
        <TextField variant='outlined' size='small' label='Clinic Name' sx={{width: '100%'}} disabled={toggleEditProfile}/>
        <div className='grid grid-cols-2 gap-5'>
            <TextField variant='outlined' size='small' label='Address' sx={{width: '100%'}} disabled={toggleEditProfile}/>
            <TextField variant='outlined' size='small' label='ZIP code' sx={{width: '100%'}} disabled={toggleEditProfile}/>
            <TextField variant='outlined' size='small' label='Telephone Number' sx={{width: '100%'}} disabled={toggleEditProfile}/>
            <TextField variant='outlined' size='small' label='Email Address' sx={{width: '100%'}} disabled={toggleEditProfile}/>
            <TextField variant='outlined' size='small' label='Website' sx={{width: '100%'}} disabled={toggleEditProfile}/>
            <TextField variant='outlined' size='small' label='Operating Hours' sx={{width: '100%'}} disabled={toggleEditProfile}/>
            <TextField variant='outlined' size='small' label='Specialization' sx={{width: '100%'}} disabled={toggleEditProfile}/>
            <TextField variant='outlined' size='small' label='Parking' sx={{width: '100%'}} disabled={toggleEditProfile}/>
        </div>
      </div>
    )
  }

export default EditClinic
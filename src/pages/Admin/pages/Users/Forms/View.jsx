import React from 'react'
import NoImage from '/petImg/NoImage.jfif'
import NoCode from '/petImg/NoCode.webp'
import { Box, Grid, TextField, Typography } from '@mui/material'

function View() {
  return (
    <div className='space-y-5'>
        <div>
            <Typography>
                <label className='font-bold text-2xl'>User Profile</label>
            </Typography>
        </div>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <img src={NoImage} alt='PetImage' className='h-60 w-60 rounded-2xl'/>
        </Box>
        <div>
            <Form/>
        </div>
    </div>
  )
}

function Form() {
    return (
        <div className='flex flex-col gap-2'>
            <TextField variant="outlined" disabled size='small' label="Last Name"/>
            <TextField variant="outlined" disabled size='small' label="First Name"/>
            <TextField variant="outlined" disabled size='small' label="Last Name"/>
            <TextField variant="outlined" disabled size='small' label="Role"/>
            <TextField variant="outlined" disabled size='small' label="Contact Number"/>
            <TextField variant="outlined" disabled size='small' label="Email"/>
            <TextField variant="outlined" disabled size='small' label="Address"/>
        </div>
    )
}



export default View
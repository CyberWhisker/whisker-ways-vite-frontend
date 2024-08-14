import React from 'react'
import NoImage from '/petImg/NoImage.jfif'
import NoCode from '/petImg/NoCode.webp'
import { Box, Button, TextField, Typography } from '@mui/material'
import { InputFile } from '../../../../../components'

function View() {
  return (
    <div className='space-y-5'>
        <div className='flex justify-between'>
            <Typography>
                <label className='font-bold text-2xl'>Pet Profile Edit</label>
            </Typography>
        </div>
        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingX:23, gap: 2}}>
            <Box sx={{height: '80%', width: '80%'}}>
                <img src={NoImage} alt='PetImage' className='h-full w-full rounded-2xl'/>
            </Box>
            <InputFile/>
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
            <TextField variant="outlined" size='small' label="Last Name"/>
            <TextField variant="outlined" size='small' label="First Name"/>
            <TextField variant="outlined" size='small' label="Last Name"/>
            <TextField variant="outlined" size='small' label="Role"/>
            <TextField variant="outlined" size='small' label="Contact Number"/>
            <TextField variant="outlined" size='small' label="Email"/>
            <TextField variant="outlined" size='small' label="Address"/>
            <Button variant='contained' color='warning'>Save Changes</Button>
        </div>
    )
}



export default View
import React from 'react'
import NoImage from '/petImg/NoImage.jfif'
import NoCode from '/petImg/NoCode.webp'
import { Button, TextField, Typography } from '@mui/material'
import { InputFile } from '../../../../../components'

function View() {
  return (
    <div className='space-y-5'>
        <div className='flex justify-between'>
            <Typography>
                <label className='font-bold text-2xl'>Edit Form</label>
            </Typography>
            <Button variant='contained' color='warning'>Save Changes</Button>
        </div>
        <div>
            <Form/>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-col items-center gap-2'>
                <div className='h-60 w-60 rounded-2xl overflow-hidden'>
                    <img src={NoImage} alt='PetImage' className='w-full h-full'/>
                </div>
                <InputFile/>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='h-60 w-60'>
                    <img src={NoCode} className='w-full h-full' alt='Code'/>
                </div>
                <InputFile/>
            </div>
        </div>
    </div>
  )
}

function Form() {
    return (
        <div className='flex flex-col gap-2'>
            <TextField variant="outlined" size='small' label="Pet Name" value="Pet Name"/>
            <TextField variant="outlined" size='small' label="Type" value="Dog"/>
            <TextField variant="outlined" size='small' label="Breed" value="Bulldog"/>
            <TextField variant="outlined" size='small' label="Age" value="2 Months"/>
            <TextField variant="outlined" size='small' label="Neutered" value="Neutered"/>
            <TextField variant="outlined" size='small' label="Personality" value="Personality"/>
            <TextField variant="outlined" size='small' label="Shelter ID" value="SH001"/>
        </div>
    )
}



export default View
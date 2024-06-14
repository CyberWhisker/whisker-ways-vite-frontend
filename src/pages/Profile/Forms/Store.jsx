import React from 'react'
import NoImage from '/petImg/NoImage.jfif'
import NoCode from '/petImg/NoCode.webp'
import { Button, TextField, Typography } from '@mui/material'
import { InputFile } from '../../../components'

function Store() {
  return (
    <div className='space-y-5'>
        <div className='flex justify-between'>
            <Typography>
                <label className='font-bold text-2xl'>Store Form</label>
            </Typography>
            <Button variant='contained'>Add</Button>
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
                <Button variant='contained' style={{width: '100%'}} size='large' color='warning'>Generate QR</Button>
            </div>
        </div>
    </div>
  )
}

function Form() {
    return (
        <form className='flex flex-col gap-2'>
            <TextField variant="outlined" size='small' label="Pet Name"/>
            <TextField variant="outlined" size='small' label="Type"/>
            <TextField variant="outlined" size='small' label="Breed"/>
            <TextField variant="outlined" size='small' label="Age"/>
            <TextField variant="outlined" size='small' label="Neutered"/>
            <TextField variant="outlined" size='small' label="Personality"/>
            <TextField variant="outlined" size='small' label="Open for play dates"/>
            <TextField variant="outlined" size='small' label="Bio"/>
        </form>
    )
}



export default Store
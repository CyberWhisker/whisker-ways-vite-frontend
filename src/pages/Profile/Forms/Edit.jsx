import React from 'react'
import NoImage from '/petImg/NoImage.jfif'
import NoCode from '/petImg/NoCode.webp'
import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField, Typography } from '@mui/material' 
import { InputFile } from '../../../components'

function Edit() {
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
        <form className='flex flex-col gap-2'>
        <TextField variant="outlined" size='small' label="Pet Name"/>
        <TextField select variant="outlined" size='small' label="Type">
                <MenuItem value="dog">Dog</MenuItem>
                <MenuItem value="cat">Cat</MenuItem>
            </TextField>
            <TextField variant="outlined" size='small' label="Breed"/>
            <TextField variant="outlined" size='small' label="Age"/>
            <FormControl>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2}}>
                    <FormLabel id="allergies-label">Neutered</FormLabel>
                    <RadioGroup
                        aria-labelledby="allergies-label"
                        name="allergies-group"
                        sx={{display: 'flex', flexDirection: 'row'}}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </Box>
            </FormControl>
        <TextField variant="outlined" size='small' label="Personality"/>
        <TextField variant="outlined" size='small' label="Open for play dates"/>
        <TextField variant="outlined" size='small' label="Bio"/>
        </form>
    )
}



export default Edit
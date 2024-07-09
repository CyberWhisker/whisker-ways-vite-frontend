import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Edit() {
    const [toggle, setToggle] = useState(true);
  return (
    <form className='grid grid-cols-2 gap-5'>
        <div>
            <Typography>Business Permit</Typography>
            <TextField type='file' sx={{width: '100%'}} disabled={toggle}/>
        </div>
        <div>
            <Typography>Mayor's Permit</Typography>
            <TextField type='file' sx={{width: '100%'}} disabled={toggle}/>
        </div>
        <div>
            <Typography>Professional Regulatory Commission (PRC) License</Typography>
            <TextField type='file' sx={{width: '100%'}} disabled={toggle}/>
        </div>
        <div>
            <Typography>Bureau of Animal Industry (BAI) Accreditation</Typography>
            <TextField type='file' sx={{width: '100%'}} disabled={toggle}/>
        </div>
        <div>
            <Typography>Sanitary Permit</Typography>
            <TextField type='file' sx={{width: '100%'}} disabled={toggle}/>
        </div>
        <div>
            <Typography>Barangay Clearance</Typography>
            <TextField type='file' sx={{width: '100%'}} disabled={toggle}/>
        </div>
        <div>
            <Typography>Environmental Compliance Certificate (ECC)</Typography>
            <TextField type='file' sx={{width: '100%'}} disabled={toggle}/>
        </div>
        <div>
            <Typography>Verification Status</Typography>
            <TextField type='file' sx={{width: '100%'}} disabled={toggle}/>
        </div>
        {toggle ? (
            <div className='flex justify-end col-span-2'>
                <Button variant='contained' color='warning' onClick={() => setToggle(!toggle)}>Edit Clinic</Button>
            </div>
        ):(
            <div className='flex justify-end col-span-2'>
                <Button variant='contained' onClick={() => setToggle(!toggle)}>Save Changes</Button>
            </div>
        )}
    </form>
  )
}

export default Edit
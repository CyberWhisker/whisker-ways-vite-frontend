import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

function StoreMessageForm() {
  return (
    <div className='space-y-5'>
        <Typography>
            <label className='font-bold text-2xl'>Send Message Form</label>
        </Typography>
        <form className='space-y-5'>
            <TextField id="outlined-basic" label="Your Name" variant="outlined" sx={{width: '100%'}}/>
            <TextField id="outlined-basic" label="Your Email" variant="outlined" sx={{width: '100%'}}/>
            <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{width: '100%'}}/>
            <TextField id="outlined-basic" label="Message" variant="outlined" sx={{width: '100%'}} multiline rows={4}/>
            <Button variant='contained' sx={{width: '100%'}}>Send Message</Button>
        </form>
    </div>
  )
}

export default StoreMessageForm
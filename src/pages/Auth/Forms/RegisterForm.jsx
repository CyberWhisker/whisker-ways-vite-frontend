import React from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'

function RegisterForm() {
  return (
    <Container className='space-y-5'>
        <Typography>
            <label className='text-4xl font-bold'>Register</label>
        </Typography>
        <form className='space-y-5'>
            <TextField id="outlined-basic" label="Enter Fist Name" variant="outlined" sx={{width: '100%'}}/>
            <TextField id="outlined-basic" label="Enter Last Name" variant="outlined" sx={{width: '100%'}}/>
            <TextField id="outlined-basic" label="Enter Mobile Number" variant="outlined" sx={{width: '100%'}}/>
            <TextField id="outlined-basic" label="Enter Email" variant="outlined" sx={{width: '100%'}}/>
            <TextField id="outlined-basic" label="Enter Password" variant="outlined" sx={{width: '100%'}} type='password'/>
            <TextField id="outlined-basic" label="Enter Re-enter Password" variant="outlined" sx={{width: '100%'}} type='password'/>
            <Button variant='contained' sx={{width: "100%"}}>Login</Button>
        </form>
        <div className='flex justify-end'>
            <Typography>
                <Button href='/register'>
                    I have an account
                </Button>
            </Typography>
        </div>
        <Button variant='outlined' sx={{width: '100%'}}>Sign in with Google</Button>
    </Container>
  )
}

export default RegisterForm
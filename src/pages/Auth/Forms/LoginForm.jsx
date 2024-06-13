import { Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

function LoginForm() {
  return (
    <Container className='space-y-5'>
        <Typography>
            <label className='text-4xl font-bold'>Login</label>
        </Typography>
        <form className='space-y-5'>
            <TextField id="outlined-basic" label="Enter Email" variant="outlined" sx={{width: '100%'}}/>
            <TextField id="outlined-basic" label="Enter Password" variant="outlined" sx={{width: '100%'}} type='password'/>
            <Button variant='contained' sx={{width: "100%"}}>Login</Button>
        </form>
        <div className='flex justify-end'>
            <Typography>
                <Button href='/register'>
                    I don't have an account
                </Button>
            </Typography>
        </div>
        <Button variant='outlined' sx={{width: '100%'}}>Sign in with Google</Button>
    </Container>
  )
}

export default LoginForm
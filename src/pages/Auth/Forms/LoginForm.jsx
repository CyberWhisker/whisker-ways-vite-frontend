import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function LoginForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password } = formData;
        setSubmitted(false);
        if (!email || !password) {
            setSubmitted(true);
            return toast.error('Please fill out all fields');
        }

        // Handle form submission...
        
        // Clear form data after submission
        setFormData({
            email: '',
            password: '',
        });

        toast.success('Login Successfull');
    };
  return (
    <Container className='space-y-5'>
        <Typography>
            <label className='text-4xl font-bold'>Login</label>
        </Typography>
        <form className='space-y-5' onSubmit={handleSubmit}>
            {Object.entries(formData).map(([key, value]) => (
                <TextField 
                label={`Enter ${key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}`}
                variant="outlined" 
                sx={{width: '100%'}}
                onChange={handleChange}
                name={key}
                value={value}
                error={submitted && !value}
                helperText={submitted && !value && 'Required'}
                />
            ))}
            <Button variant='contained' sx={{width: '100%'}} type='submit'>Login</Button>
        </form>
        <div className='flex justify-end'>
            <Typography>
                <Button href='/register'>
                    I don't have an account
                </Button>
            </Typography>
        </div>
        <Button variant='outlined' sx={{width: '100%'}}>Sign in with Google</Button>
        <ToastContainer/>
    </Container>
  )
}

export default LoginForm
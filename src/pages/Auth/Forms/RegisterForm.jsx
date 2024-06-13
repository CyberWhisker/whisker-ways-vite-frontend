import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(false);
        const { firstname, lastname, mobile, email, password, confirm_password } = formData;
        
        if (!firstname || !lastname || !mobile || !email || !password || !confirm_password) {
            setSubmitted(true);
            return toast.error('Please fill out all fields');
        }

        if (password !== confirm_password) {
            setSubmitted(true);
            return toast.error('Passwords do not match');
        }

        // Handle form submission...
        
        // Clear form data after submission
        setFormData({
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            password: '',
            confirm_password: '',
        });

        toast.success('Registration successful');
    };

    return (
        <Container className='space-y-5'>
            <Typography>
                <label className='text-4xl font-bold'>Register</label>
            </Typography>
            <form className='space-y-5' onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <TextField
                        key={key}
                        label={`Enter ${key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}`}
                        variant="outlined"
                        sx={{ width: '100%' }}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        type={key.includes('password') ? 'password' : 'text'}
                        error = {submitted && !value}
                        helperText={submitted && !value && 'Required'}
                    />
                ))}
                <Button variant='contained' sx={{ width: '100%' }} type='submit'>Register</Button>
            </form>
            <div className='flex justify-end'>
                <Typography>
                    <Button href='/login'>I have an account</Button>
                </Typography>
            </div>
            <Button variant='outlined' sx={{ width: '100%' }}>Sign in with Google</Button>
            <ToastContainer />
        </Container>
    );
}

export default RegisterForm;

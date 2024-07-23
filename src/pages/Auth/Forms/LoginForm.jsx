import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const SampleData = [
    {
        email: 'user@gmail.com',
        password: '1234',
        type: 'user'
    },
    {
        email: 'admin@gmail.com',
        password: '1234',
        type: 'admin'
    },
    {
        email: 'vet@gmail.com',
        password: '1234',
        type: 'vet'
    },
    {
        email: 'shelter@gmail.com',
        password: '1234',
        type: 'shelter'
    },
];

function LoginForm() {
    let navigate = useNavigate();

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
        const { email, password } = formData;
        setSubmitted(false);
        if (!email || !password) {
            setSubmitted(true);
            return toast.error('Please fill out all fields');
        }

        // Find user in SampleData
        const user = SampleData.find(user => user.email === email && user.password === password);

        if (user) {
            toast.success('Login Successful');
            localStorage.setItem("userType", user.type);
        } else {
            toast.error('Invalid email or password');
        }

        //Redirect User
        if (user) {
            if (user.type == 'admin') {
                navigate("/admin");
            } else if (user.type == 'vet') {
                navigate("/vet");
            } else if (user.type == 'shelter') {
                navigate("/shelter");
            } else {
                navigate("/user/petfinder");
            }
            window.location.reload();
        }

        // Clear form data after submission
        setFormData({
            email: '',
            password: '',
        });
        
    };
    

    return (
        <Container className='space-y-5'>
            <Typography>
                <label className='text-4xl font-bold'>Login</label>
            </Typography>
            <form className='space-y-5' onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <TextField 
                        key={key}
                        label={`Enter ${key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}`}
                        variant="outlined" 
                        sx={{width: '100%'}}
                        onChange={handleChange}
                        name={key}
                        value={value}
                        error={submitted && !value}
                        helperText={submitted && !value && 'Required'}
                        type={key == "password" ? "password" : "email"}
                    />
                ))}
                <Button variant='contained' sx={{width: '100%'}} type='submit'>Login</Button>
            </form>
            <div className='flex justify-end'>
                <Typography>
                    <Button component={Link} to='/register'>
                        I don't have an account
                    </Button>
                </Typography>
            </div>
            <Button variant='outlined' sx={{width: '100%'}}>Sign in with Google</Button>
            <ToastContainer/>
        </Container>
    );
}

export default LoginForm;

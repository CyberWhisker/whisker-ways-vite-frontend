import React, { useState } from 'react'
import Master from '../../../../layouts/Master'
import { alpha, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'

function AdoptionForm() {
  return (
    <Master>
      <Box
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? `linear-gradient(#FFF, ${alpha('#CEE5FD', 0.0)})`
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}>
        <Container
        className='space-y-5'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 15 },
            justifyContent: 'center'
          }}
        >
            <Form/>
        </Container>
      </Box>
    </Master>
  )
}

function Form() {
    // State for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [occupation, setOccupation] = useState('');
    const [status, setStatus] = useState('');
    const [home, setHome] = useState('');
    const [permission, setPermission] = useState('');
    const [fencedYard, setFencedYard] = useState('');
    const [livingWith, setLivingWith] = useState([]);
    const [allergies, setAllergies] = useState('');
    const [petInterested, setPetInterested] = useState([]);
    const [petSize, setPetSize] = useState([]);
    const [exerciseTime, setExerciseTime] = useState('');
    const [activities, setActivities] = useState('');
    const [longTermPlans, setLongTermPlans] = useState('');
    const [petWellbeing, setPetWellbeing] = useState('');

    // Handle change events
    const handleChange = (setter) => (event) => setter(event.target.value);

    const handleCheckboxChange = (setter) => (event) => {
        const { value, checked } = event.target;
        setter(prev => checked ? [...prev, value] : prev.filter(v => v !== value));
    }

    // Submit handler
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            phone,
            address,
            zipCode,
            birthDate,
            occupation,
            status,
            home,
            permission,
            fencedYard,
            livingWith,
            allergies,
            petInterested,
            petSize,
            exerciseTime,
            activities,
            longTermPlans,
            petWellbeing
        };

        console.log(JSON.stringify(formData, null, 2));
    }

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Stack direction="column" spacing={2} width={'70%'}>
                <Typography variant='h4' fontWeight="bold">ADOPTION APPLICATION</Typography>
                <Typography>Pets bring so much to our lives, but owning a pet is a lifelong commitment. Whether you are an experienced pet owner or first-time adopter, please ensure that you engage in responsible pet ownership practices to assure your pet’s health, happiness and well-being.</Typography>
                <TextField label="First Name" variant='outlined' value={firstName} onChange={handleChange(setFirstName)} />
                <TextField label="Last Name" variant='outlined' value={lastName} onChange={handleChange(setLastName)} />
                <TextField label="Email" variant='outlined' value={email} onChange={handleChange(setEmail)} />
                <TextField label="Phone" variant='outlined' value={phone} onChange={handleChange(setPhone)} />
                <TextField label="Address" variant='outlined' value={address} onChange={handleChange(setAddress)} />
                <TextField label="ZIP Code" variant='outlined' value={zipCode} onChange={handleChange(setZipCode)} />
                <TextField label="Birth Date" variant='outlined' value={birthDate} onChange={handleChange(setBirthDate)} />
                <TextField label="Occupation" variant='outlined' value={occupation} onChange={handleChange(setOccupation)} />
                <FormControl>
                    <FormLabel id="status-label">Status</FormLabel>
                    <RadioGroup
                        aria-labelledby="status-label"
                        name="status-group"
                        value={status}
                        onChange={handleChange(setStatus)}
                    >
                        <FormControlLabel value="single" control={<Radio />} label="Single" />
                        <FormControlLabel value="married" control={<Radio />} label="Married" />
                        <FormControlLabel value="other" control={<Radio />} label="Others" />
                    </RadioGroup>
                </FormControl>
                <Typography variant='h4' fontWeight="bold">ADOPTION APPLICATION</Typography>
                <Typography>Please answer the questions below. All responses will be forwarded to the shelter admin for interview purposes to assess your suitability and readiness to adopt following your appointment with the shelter.</Typography>
                <Typography fontWeight="bold">About Your Living Situation:</Typography>
                <FormControl>
                    <FormLabel id="home-label">Do you own or rent your home?</FormLabel>
                    <RadioGroup
                        aria-labelledby="home-label"
                        name="home-group"
                        value={home}
                        onChange={handleChange(setHome)}
                    >
                        <FormControlLabel value="owned" control={<Radio />} label="Owned" />
                        <FormControlLabel value="rent" control={<Radio />} label="Rent" />
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel id="permission-label">If you rent, do you have permission from your landlord to have a pet?</FormLabel>
                    <RadioGroup
                        aria-labelledby="permission-label"
                        name="permission-group"
                        value={permission}
                        onChange={handleChange(setPermission)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel id="fenced-yard-label">Do you have a fenced yard or secure outdoor space for the pet to play?</FormLabel>
                    <RadioGroup
                        aria-labelledby="fenced-yard-label"
                        name="fenced-yard-group"
                        value={fencedYard}
                        onChange={handleChange(setFencedYard)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <FormGroup>
                    <FormLabel id="living-with-label">Who do you live with?</FormLabel>
                    <FormControlLabel control={<Checkbox />} value="Family" onChange={handleCheckboxChange(setLivingWith)} label="Family" />
                    <FormControlLabel control={<Checkbox />} value="Roommate(s)" onChange={handleCheckboxChange(setLivingWith)} label="Roommate(s)" />
                    <FormControlLabel control={<Checkbox />} value="Alone" onChange={handleCheckboxChange(setLivingWith)} label="Alone" />
                    <FormControlLabel control={<Checkbox />} value="Children(s)" onChange={handleCheckboxChange(setLivingWith)} label="Children(s)" />
                </FormGroup>
                <FormControl>
                    <FormLabel id="allergies-label">Are there any allergies to pets in your household?</FormLabel>
                    <RadioGroup
                        aria-labelledby="allergies-label"
                        name="allergies-group"
                        value={allergies}
                        onChange={handleChange(setAllergies)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Typography fontWeight="bold">Pet Preferences:</Typography>
                <FormGroup>
                    <FormLabel id="pet-interested-label">Are you interested in adopting?</FormLabel>
                    <FormControlLabel control={<Checkbox />} value="Cat" onChange={handleCheckboxChange(setPetInterested)} label="Cat" />
                    <FormControlLabel control={<Checkbox />} value="Dog" onChange={handleCheckboxChange(setPetInterested)} label="Dog" />
                </FormGroup>
                <FormGroup>
                    <FormLabel id="pet-size-label">What size of pet are you looking for?</FormLabel>
                    <FormControlLabel control={<Checkbox />} value="Small" onChange={handleCheckboxChange(setPetSize)} label="Small" />
                    <FormControlLabel control={<Checkbox />} value="Medium" onChange={handleCheckboxChange(setPetSize)} label="Medium" />
                    <FormControlLabel control={<Checkbox />} value="Large" onChange={handleCheckboxChange(setPetSize)} label="Large" />
                </FormGroup>
                <FormGroup>
                    <FormLabel id="exercise-time-label">How much time can you dedicate to exercising and playing with the pet each day?</FormLabel>
                    <TextField value={exerciseTime} onChange={handleChange(setExerciseTime)} />
                </FormGroup>
                <FormGroup>
                    <FormLabel id="activities-label">Do you have any specific activities or hobbies that you would like to include your pet in?</FormLabel>
                    <TextField value={activities} onChange={handleChange(setActivities)} />
                </FormGroup>
                <Typography fontWeight="bold">Future Plans:</Typography>
                <FormGroup>
                    <FormLabel id="long-term-plans-label">What are your long-term plans and commitments for the pet?</FormLabel>
                    <TextField value={longTermPlans} onChange={handleChange(setLongTermPlans)} />
                </FormGroup>
                <FormGroup>
                    <FormLabel id="pet-wellbeing-label">How do you plan to ensure the pet's well-being and happiness as they age?</FormLabel>
                    <TextField value={petWellbeing} onChange={handleChange(setPetWellbeing)} />
                </FormGroup>
                <Button variant="contained" type="submit">Submit</Button>
            </Stack>
        </form>
    )
}

export default AdoptionForm

import * as React from 'react';
import { Button, Skeleton, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CustomCard from '../../../components/CustomCard';
import { Home, Pets, PinDrop, Search } from '@mui/icons-material';

const Data = [
  {
    "title": "Life-Saving Mission",
    "description": "By choosing to adopt from us, you're not just bringing home a pet, our animals come from shelters or rescue groups, giving them a second chance at happiness."
  },
  {
    "title": "Variety of Pets",
    "description": "From playful puppies and kittens to seasoned seniors, we have a wide range of pets available for adoption, we're confident we can find the perfect match for you. "
  },
  {
    "title": "Health and Wellness",
    "description": "Each of our pets receives thorough medical care, including vaccinations, spaying/neutering, and any necessary treatments. "
  },
  {
    "title": "Support and Guidance",
    "description": "Our team is here to support you every step of the way, from choosing the right pet for your family to providing tips and resources for successful integration into your home."
  },
  {
    "title": "Support and Guidance",
    "description": "Our team is here to support you every step of the way, from choosing the right pet for your family to providing tips and resources for successful integration into your home."
  },
  {
    "title": "Support and Guidance",
    "description": "Our team is here to support you every step of the way, from choosing the right pet for your family to providing tips and resources for successful integration into your home."
  },
  {
    "title": "Support and Guidance",
    "description": "Our team is here to support you every step of the way, from choosing the right pet for your family to providing tips and resources for successful integration into your home."
  },
  {
    "title": "Support and Guidance",
    "description": "Our team is here to support you every step of the way, from choosing the right pet for your family to providing tips and resources for successful integration into your home."
  },
]

export default function Finder() {
  return (
    <Box
      id="hero"
      sx={() => ({
        width: '100%',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <Typography>
          <label className='font-extrabold text-5xl'>Finder Tools</label>
        </Typography>
        <ControlList/>
        <CardList/>
      </Container>
    </Box>
  );
}

const CardList = () => {
  return (
    <div className='grid lg:grid-cols-4 w-full gap-10'>
      {Data.map((item, index) => (
        <CustomCard key={index}>
          <div className='w-full'>
            <Box sx={{ width: '100%' }}>
              <Skeleton animation="wave" width={'100%'} height={200}/>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </Box>
          </div>
        </CustomCard>
      ))}
      <></>
    </div>
  )
}

function ControlList() {
  return(
    <CustomCard>
      <div className='sm:flex justify-between w-full space-y-5 lg:space-y-0'>
        <div className='flex space-x-5 items-center'>
          <Home sx={{fontSize: 35}}/>
          <TextField label="Enter your ZIP code" variant="standard" style={{width: '100%', flex: 1}}/>
        </div>
        <div className='flex space-x-5 items-center'>
          <PinDrop sx={{fontSize: 35}}/>
          <TextField label="Enter Radius" variant="standard" style={{width: '100%'}}/>
        </div>
        <div className='flex space-x-5 items-center'>
          <Pets sx={{fontSize: 35}}/>
          <TextField label="Select Tool" variant="standard" style={{width: '100%'}}/>
        </div>
        <div className='flex space-x-5 items-center justify-center'>
          <Button variant="plaine">
            <Search sx={{fontSize: 35}}/>
          </Button>
        </div>
      </div>
    </CustomCard>
  )
}
import React, { useState } from 'react';
import { Button, Card, MenuItem, Skeleton, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {CustomCard} from '../../../components';
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
  const cityData = [
    {
      "_id": 1,
      "name": "Intramuros"
    },
    {
      "_id": 2,
      "name": "Malate"
    },
    {
      "_id": 3,
      "name": "Ermita"
    },
    {
      "_id": 4,
      "name": "Quiapo"
    },
    {
      "_id": 5,
      "name": "San Miguel"
    }
  ]
  const toolsData = [
    {
      "_id": 1,
      "name": "Pet Finder"
    },
    {
      "_id": 2,
      "name": "Pet Dating"
    },
    {
      "_id": 3,
      "name": "Vet Locator"
    },
    {
      "_id": 4,
      "name": "Shelter Locator"
    }
  ]
  const coverageData = [
    {
      "_id": 1,
      "name": "Within the City"
    },
    {
      "_id": 2,
      "name": "Outside the City"
    },
    {
      "_id": 3,
      "name": "Within the Province"
    }
  ]

  const [city, setCity] = useState('');
  const [tools, setTools] = useState('');
  const [coverage, setCoverage] = useState('');

  const handleCity = (event) => {
    setCity(event.target.value)
  } 
  const handleCoverage = (event) => {
    setCoverage(event.target.value)
  } 
  const handleTools = (event) => {
    setTools(event.target.value)
  } 
  
  return(
    <Card sx={{width: '100%', padding: 2, borderRadius: 2}}>
      <Stack direction="row" justifyContent="space-between" flex={1} spacing={10}>
        <Box sx={{display: 'flex', alignItems: 'center', flex: 1, gap: 2}}>
          <Home sx={{fontSize: 35}}/>
          <TextField 
          label="Select your City" 
          select 
          variant="standard" 
          sx={{width: '100%'}}
          value={city}
          onChange={handleCity}
          >
            {cityData.map((item, index) => (
              <MenuItem key={index} value={item._id}>{item.name}</MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', flex: 1, gap: 2}}>
          <PinDrop sx={{fontSize: 35}}/>
          <TextField 
          label="Select Coverage" 
          select 
          variant="standard" 
          sx={{width: '100%'}}
          value={coverage}
          onChange={handleCoverage}
          >
            {coverageData.map((item, index) => (
              <MenuItem key={index} value={item._id}>{item.name}</MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', flex: 1, gap: 2}}>
          <Pets sx={{fontSize: 35}}/>
          <TextField 
          label="Select Tools" 
          select 
          variant="standard" 
          sx={{width: '100%'}}
          value={tools}
          onChange={handleTools}
          >
            {toolsData.map((item, index) => (
              <MenuItem key={index} value={item._id}>{item.name}</MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <Button variant="plaine">
            <Search sx={{fontSize: 35}}/>
          </Button>
        </Box>
      </Stack>
    </Card>
  )
}
import React, { useState } from 'react'
import Master from '../../../layouts/Master'
import { Box, Button, Card, Container, Divider, Grid, MenuItem, Stack, TextField, Typography, alpha } from '@mui/material'
import { CustomCard } from '../../../components'
import { ArrowRight, Pets } from '@mui/icons-material'
import { Home, PinDrop, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import Data from './DataClinic.json'

function Clinic() {
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
          }}
        >
          <Typography>
            <label className='text-5xl font-extrabold'>Near my Location</label>
          </Typography>
          <Typography> Please provide your information to assist you in locating veterinary clinics. </Typography>
          <ControlList/>
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '90%' } }}>
            <ClinicList/>
          </Stack>
        </Container>
      </Box>
    </Master>
  )
}

function ClinicList() {
  const [data, setData] = useState(Data);
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => {
        return(
          <Grid item xs={6} md={3} key={index}>
            <CustomCard>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                <img src={`/clinicImg/${item.image}`} alt='PetImg' style={{height: 150, width: '100%'}}/>
                <Typography sx={{fontWeight: 'bold'}}>{item.name}</Typography>
                <Typography>{item.address}</Typography>
                <Typography>{item.phone}</Typography>
                <Divider/>
                <Typography className='pb-10'>{item.description}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    height: '100%',
                    position: 'relative', // Ensure the container has relative positioning
                  }}
                >
                  <Button
                    variant='outlined'
                    sx={{
                      position: 'absolute', // Position the button absolutely
                      bottom: 0,            // Align the button to the bottom
                      right: 0,             // Align the button to the right
                    }}
                    component={Link}
                    to={`/user/clinic/${item._id}`}
                  >
                    Clinic Details <ArrowRight />
                  </Button>
                </Box>
              </Box>
            </CustomCard>
          </Grid>
        )
      })}
    </Grid>
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
  const [coverage, setCoverage] = useState('');

  const handleCity = (event) => {
    setCity(event.target.value);
  }
  const handleCoverage = (event) => {
    setCoverage(event.target.value);
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
        <Box>
          <Button variant="plaine">
            <Search sx={{fontSize: 35}}/>
          </Button>
        </Box>
      </Stack>
    </Card>
  )
}

export default Clinic
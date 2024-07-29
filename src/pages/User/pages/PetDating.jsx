import React from 'react'
import Master from '../../../layouts/Master'
import { Box, Button, Container, Divider, Stack, Typography, alpha } from '@mui/material'
import { CustomCard } from '../../../components'
import { ArrowRight } from '@mui/icons-material'

const Data = [
  {
      "_id": 1,
      "name": "Jupiter",
      "gender": "Male",
      "species": "Dog",
      "breed": "American Bully",
      "location": "AKF Animal Rescue & Rehabilitation Center"
  },
  {
      "_id": 2,
      "name": "Jupiter",
      "gender": "Male",
      "species": "Dog",
      "breed": "American Bully",
      "location": "AKF Animal Rescue & Rehabilitation Center"
  },
  {
      "_id": 3,
      "name": "Jupiter",
      "gender": "Male",
      "species": "Dog",
      "breed": "American Bully",
      "location": "AKF Animal Rescue & Rehabilitation Center"
  },
  {
      "_id": 4,
      "name": "Jupiter",
      "gender": "Male",
      "species": "Dog",
      "breed": "American Bully",
      "location": "AKF Animal Rescue & Rehabilitation Center"
  },
  {
      "_id": 5,
      "name": "Jupiter",
      "gender": "Male",
      "species": "Dog",
      "breed": "American Bully",
      "location": "AKF Animal Rescue & Rehabilitation Center"
  },
  {
      "_id": 6,
      "name": "Jupiter",
      "gender": "Male",
      "species": "Dog",
      "breed": "American Bully",
      "location": "AKF Animal Rescue & Rehabilitation Center"
  },
  {
      "_id": 7,
      "name": "Jupiter",
      "gender": "Male",
      "species": "Dog",
      "breed": "American Bully",
      "location": "AKF Animal Rescue & Rehabilitation Center"
  },
  {
      "_id": 8,
      "name": "Jupiter",
      "gender": "Male",
      "species": "Dog",
      "breed": "American Bully",
      "location": "AKF Animal Rescue & Rehabilitation Center"
  }
]


function PetDating() {
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
        className='space-y-10'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 15 },
          }}
        >
          <Typography>
            <label className='text-5xl font-extrabold'>Pet Dating</label>
          </Typography>
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '90%' } }}>
            <PetList/>
          </Stack>
        </Container>
      </Box>
    </Master>
  )
}

function PetList() {
  return (
    <div className='grid lg:grid-cols-4 gap-5'>
      {Data.map((item, index) => {
        return(
          <div className='hover:-translate-y-4 transition' key={index}>
            <CustomCard key={index}>
              <div className='space-y-2'>
                <img src={'/petImg/dog.png'} alt='PetImg'/>
                <Typography sx={{fontWeight: 'bold'}}>{item.name}</Typography>
                <Typography>{item.gender}, {item.species}</Typography>
                <Divider/>
                <Typography>{item.species}</Typography>
                <Typography>{item.location}</Typography>
                <div className='flex justify-end'>
                  <Button variant='outlined'>Pet Details <ArrowRight/></Button>
                </div>
              </div>
            </CustomCard>
          </div>
        )
      })}
    </div>
  )
}

export default PetDating
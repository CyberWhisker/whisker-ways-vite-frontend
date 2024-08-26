import React, { useState } from 'react'
import Master from '../../../layouts/Master'
import { Box, Button, Container, Divider, Grid, Stack, Typography, alpha } from '@mui/material'
import { CustomCard } from '../../../components'
import { ArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Data from './Data.json';


function PetFinder() {
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
        })}
      >
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
            <label className='text-5xl font-extrabold'>Pet Finder</label>
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
  const [data, setData] = useState(Data);
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => {
        return(
          <Grid item xs={6} md={3} key={index}>
            <CustomCard key={index}>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, justifyContent: 'space-between'}}>
                <Stack spacing={1}>
                  <img src={'/petImg/dog.png'} alt='PetImg'/>
                  <Typography sx={{fontWeight: 'bold'}}>{item.name}</Typography>
                  <Typography>{item.gender}, {item.species}</Typography>
                  <Divider/>
                  <Typography>{item.breed}</Typography>
                  <Typography>{item.location}</Typography>
                </Stack>
                <Box sx={{display: 'flex', justifyContent:'end'}}>
                  <Button variant='outlined' component={Link} to={`/user/petfinder/${item._id}`}>
                    <Typography sx={{display: {xs: 'none', md: 'block'}}}>Pet</Typography> 
                    <Typography>
                      Details 
                    </Typography>
                    <ArrowRight/>
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

export default PetFinder
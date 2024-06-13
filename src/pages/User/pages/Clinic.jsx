import React from 'react'
import Master from '../../../layouts/Master'
import { Box, Button, Container, Divider, Stack, Typography, alpha } from '@mui/material'
import { CustomCard } from '../../../components'
import { ArrowRight } from '@mui/icons-material'

const Data = [
    {
      name: 'Animal Rescue PH',
      image: 'Clinic1.png',
      address: 'J Antonino St Corner Alfonso St Zone 2 Barangay Partida San Miguel Bulacan, Bulacan, Philippines',
      phone: '0923 425 6793',
      description: 'To protect, love and support those animals who were unwanted and abused. To give them second chance in life and find a better and comfortable home for every rescued animals.'
    },
    {
      name: 'Vet Solutions',
      image: 'Clinic2.png',
      address: 'Kalayaan avenue, Wilcon CIty Center Visayas Avenue, Xavierville avenue, Quezon City, Philippines',
      phone: '0925 445 0932',
      description: 'Your one stop shop on your pet needs!'
    },
    {
      name: 'Metro Animal Clinic PH',
      image: 'Clinic3.png',
      address: 'Robredo Avenue, Purok Yellowbell, 3rd Block, Brgy. Sta. Cruz, Koronadal, Philippines, 9506',
      phone: '0930 797 2653',
      description: 'Healthy pets, Happy owners'
    },
    {
      name: 'Pet Care Clinic',
      image: 'Clinic4.png',
      address: 'Robredo Avenue, Purok Yellowbell, 3rd Block, Brgy. Sta. Cruz, Koronadal, Philippines, 9506',
      phone: '0968 706 9332',
      description: 'Where caring means more'
    }
  ];


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
        className='space-y-10'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 15 },
          }}
        >
          <Typography>
            <label className='text-5xl font-extrabold'>Vet Clinic</label>
          </Typography>
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '90%' } }}>
            <ClinicList/>
          </Stack>
        </Container>
      </Box>
    </Master>
  )
}

function ClinicList() {
  return (
    <div className='grid lg:grid-cols-4 gap-5'>
      {Data.map((item, index) => {
        return(
          <div className='hover:-translate-y-4 transition'>
            <CustomCard key={index}>
              <div className='space-y-2 w-full flex-1 flex flex-col relative'>
                <img src={`/clinicImg/${item.image}`} alt='PetImg' style={{height: 150, width: '100%'}}/>
                <Typography sx={{fontWeight: 'bold'}}>{item.name}</Typography>
                <Typography>{item.address}</Typography>
                <Typography>{item.phone}</Typography>
                <Divider/>
                <Typography className='pb-10'>{item.description}</Typography>
                <div className=' right-0 bottom-0 absolute'>
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

export default Clinic
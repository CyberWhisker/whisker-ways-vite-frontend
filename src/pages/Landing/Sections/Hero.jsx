import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Pet1 from '/appImg/WEB_2.png'
import Pet2 from '/appImg/WEB_1.png'
import Pet3 from '/appImg/WEB_3.png'
import {CustomCard} from '../../../components';

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
]

export default function Hero() {
  return (
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
        }}
      >
        <div className='opacity-10 flex flex-col items-center -z-20 bg-black'>
          <img src={Pet1} className='absolute top-16'/>
          <div className='hidden lg:block'>
            <img src={Pet2} className='absolute left-72 -top-16'/>
            <img src={Pet3} className='absolute right-36 top-44 '/>
          </div>
        </div>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            <label className='text-8xl font-extrabold'>
              Whisker&nbsp;
            </label>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              <label className='text-8xl font-extrabold'>
                Ways
              </label>
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            At Whisker Way, we believe in creating forever homes for our furry friends. Every pet deserves a loving family, and we're here to make that connection happen. Whether you're looking for a playful pup to romp around with or a cuddly companion to keep you company, we have the perfect match waiting for you.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="primary">
              <span className='font-bold text-2xl'>
                Adopt
              </span>
            </Button>
          </Stack>
        </Stack>
        <div className='mt-10 space-y-10'>
          <div className='text-center w-full'>
            <Typography>
              <label className='font-extrabold text-5xl'>Why adopt from us?</label>
            </Typography>
          </div>
          <CardList/>
        </div>
      </Container>
    </Box>
  );
}

const CardList = () => {
  return (
    <div className='grid lg:grid-cols-4 w-full gap-10'>
      {Data.map((item, index) => (
        <CustomCard key={index}>
          <div className='space-y-2'>
            <div className='text-center w-full'>
              <Typography>
                <label className='font-bold text-xl'>{item.title}</label>
              </Typography>
            </div>
            <div>
              <Typography>{item.description}</Typography>
            </div>
          </div>
        </CustomCard>
      ))}
      <></>
    </div>
  )
}
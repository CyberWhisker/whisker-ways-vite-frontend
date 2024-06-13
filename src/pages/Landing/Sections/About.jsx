import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PetImg from '/appImg/WEB_5.png'
import {CustomCard,CustomBox} from '../../../components';

export default function About() {
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
          <label className='font-extrabold text-5xl'>About Us</label>
        </Typography>
        <Typography>At Whisker Way, we're not just in the business of finding homes for animals – we're passionate advocates for the well-being of every pet in our care. Founded on the belief that every animal deserves a loving family and a safe place to call home, we've dedicated ourselves to making that vision a reality.</Typography>
        <div className='grid lg:grid-cols-2 gap-5'>
            <CustomCard>
                <div className='space-y-5'>
                    <Typography><label className='font-bold'>Our Mission</label></Typography>
                    <Typography>Our mission is simple yet profound: to rescue, rehabilitate, and rehome pets in need. We work tirelessly to provide a second chance to animals who have been abandoned, neglected, or surrendered, giving them the opportunity to thrive in a loving and nurturing environment.</Typography>
                    <Typography><label className='font-bold'>Our Vision</label></Typography>
                    <Typography>We envision a world where every pet finds a loving home and experiences the care they deserve. Through our commitment to rescue, rehabilitation, and rehoming, we strive to create a community where every animal is cherished and nurtured. Together, we're building a brighter future for pets in need.</Typography>
                </div>
            </CustomCard>
            <CustomBox>
                <div className='flex justify-center w-full'>
                    <img src={PetImg} alt="Pet"/>
                </div>
            </CustomBox>
        </div>
      </Container>
    </Box>
  );
}
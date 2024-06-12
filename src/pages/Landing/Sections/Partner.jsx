import * as React from 'react';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CustomBox from '../../../components/CustomBox';
import PetImg from '/appImg/WEB_4.png'
import { Handshake } from '@mui/icons-material';

const Data = [
  {
    "name": "Animal Rescue PH",
    "logo": ""
  },
  {
    "name": "Metro Vet Clinic",
    "logo": ""
  },
  {
    "name": "Shelter Care PH",
    "logo": ""
  },
  {
    "name": "Pet Care Clinic",
    "logo": ""
  },
  {
    "name": "Paw Print PH",
    "logo": ""
  },
  {
    "name": "Vet Solutions",
    "logo": ""
  },
  {
    "name": "Compassionate Vets",
    "logo": ""
  },
  {
    "name": "Metro Animal Clinic PH",
    "logo": ""
  },
  
]

export default function Partner() {
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
          <label className='font-extrabold text-5xl'>Our Partner Shelters and Vets</label>
        </Typography>
        <CustomBox>
            <div className='w-full grid lg:grid-cols-2 gap-5'>
                <img src={PetImg} alt="Pet"/>
                <div className='grid lg:grid-cols-2 items-center gap-5'>
                    {Data.map((item, index) => (
                        <div key={index}>
                            <Card sx={{p: 2}}>
                                <div className='flex space-x-5'>
                                    <Handshake/>
                                    <Typography>{item.name}</Typography>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </CustomBox>
      </Container>
    </Box>
  );
}
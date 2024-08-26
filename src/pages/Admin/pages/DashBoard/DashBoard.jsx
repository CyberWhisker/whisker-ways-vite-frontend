import React from 'react'
import MasterAdmin from '../../../../layouts/MasterAdmin'
import { Box, Card, Divider, Grid, MenuItem, Stack, Typography } from '@mui/material'
import { BarAnimation, CustomCard } from '../../../../components'

function DashBoard() {
  return (
    <MasterAdmin>
        <div className='grid grid-cols-5 gap-5' >
            <CustomCard>
                <div className='text-center w-full space-y-3 py-5'> 
                    <Typography><label className='font-bold text-5xl'>21</label></Typography>
                    <Typography>Total Users</Typography>
                </div>
            </CustomCard>
            <CustomCard>
                <div className='text-center w-full space-y-3 py-5'> 
                    <Typography><label className='font-bold text-5xl'>21</label></Typography>
                    <Typography>Active Users</Typography>
                </div>
            </CustomCard>
            <CustomCard>
                <div className='text-center w-full space-y-3 py-5'> 
                    <Typography><label className='font-bold text-5xl'>21</label></Typography>
                    <Typography>Pets Available for Adoption</Typography>
                </div>
            </CustomCard>
            <CustomCard>
                <div className='text-center w-full space-y-3 py-5'> 
                    <Typography><label className='font-bold text-5xl'>21</label></Typography>
                    <Typography>Pending Adoption</Typography>
                </div>
            </CustomCard>
            <CustomCard>
                <div className='text-center w-full space-y-3 py-5'> 
                    <Typography><label className='font-bold text-5xl'>21</label></Typography>
                    <Typography>Pets Adopted</Typography>
                </div>
            </CustomCard>
        </div>
        <Grid container spacing={3} mt={2}>
            <Grid item xs={8}>
                <Card sx={{padding: 5}}><BarAnimation/></Card>
            </Grid>
            <Grid item xs={4}>
                <Stack spacing={2}>
                    <Card style={{padding: 10, height: '50vh', overflowY: 'auto'}}>
                        <ClinicList/>
                    </Card>
                    <Card style={{padding: 10, height: '50vh', overflowY: 'auto'}}>
                        <ShelterList/>
                    </Card>
                </Stack>
            </Grid>
        </Grid>
    </MasterAdmin>
  )
}

function ClinicList() {
    const Data = [
        {
        "_id": "1",
        "name": "Sunrise Veterinary Clinic"
        },
        {
        "_id": "2",
        "name": "Greenfield Animal Hospital"
        },
        {
        "_id": "3",
        "name": "Paws & Claws Vet Center"
        },
        {
        "_id": "4",
        "name": "Happy Tails Animal Clinic"
        },
        {
        "_id": "5",
        "name": "Metro Vet Care"
        },
        {
        "_id": "6",
        "name": "Lakeside Veterinary Services"
        },
        {
        "_id": "7",
        "name": "Urban Paws Vet Clinic"
        },
        {
        "_id": "8",
        "name": "Pet Wellness Center"
        },
        {
        "_id": "9",
        "name": "Four Seasons Animal Clinic"
        },
        {
        "_id": "10",
        "name": "Family Pet Care Clinic"
        }
    ]
      
    return (
        <Box>
            <Typography variant='h5' fontWeight='bold'>Clinic List</Typography>
            <Divider/>
            {Data.map((item, index) => (
                <MenuItem key={index}>
                    <Typography>{item.name}</Typography>
                </MenuItem>
            ))}
        </Box>
    )
}

function ShelterList() {
    const Data = [
        {
        "_id": "1",
        "name": "Sunrise Veterinary Clinic"
        },
        {
        "_id": "2",
        "name": "Greenfield Animal Hospital"
        },
        {
        "_id": "3",
        "name": "Paws & Claws Vet Center"
        },
        {
        "_id": "4",
        "name": "Happy Tails Animal Clinic"
        },
        {
        "_id": "5",
        "name": "Metro Vet Care"
        },
        {
        "_id": "6",
        "name": "Lakeside Veterinary Services"
        },
        {
        "_id": "7",
        "name": "Urban Paws Vet Clinic"
        },
        {
        "_id": "8",
        "name": "Pet Wellness Center"
        },
        {
        "_id": "9",
        "name": "Four Seasons Animal Clinic"
        },
        {
        "_id": "10",
        "name": "Family Pet Care Clinic"
        }
    ]
      
    return (
        <Box>
            <Typography variant='h5' fontWeight='bold'>Shelter List</Typography>
            <Divider/>
            {Data.map((item, index) => (
                <MenuItem key={index}>
                    <Typography>{item.name}</Typography>
                </MenuItem>
            ))}
        </Box>
    )
}

export default DashBoard
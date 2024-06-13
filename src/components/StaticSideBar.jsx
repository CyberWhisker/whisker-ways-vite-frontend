import React from 'react'
import CustomCard from './CustomCard'
import { Button, Divider, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { Dashboard, Favorite, Home, Map, Search } from '@mui/icons-material';

function StaticSideBar() {
    const location = useLocation();
    const currentLocation = location.pathname;
  return (
    <CustomCard>
        <div className="mb-2 p-4 w-full">
            <Typography className='text-center' variant="h5" color="blue-gray">
            <label className='font-bold'>Welcome Admin</label>
            </Typography>
            <Divider sx={{marginTop: 2}}/>
            <div className='space-y-4 mt-5'>
            <Button variant={currentLocation == '/admin' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/admin'>
            Dashboard
            </Button>
            <Button variant={currentLocation == '/admin/pet' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/admin/pet'>
            List of Pets
            </Button>
            <Button variant={currentLocation == '/admin/owner' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} href='/admin/owner'>
            List of Pet Owner Request
            </Button>
            <Button variant={currentLocation == '/admin/clinics' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/admin/clinic'>
            List of Vet Clinics
            </Button>
            <Button variant={currentLocation == '/admin/vet' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/admin/vet'>
            Vet Details
            </Button>
            <Button variant={currentLocation == '/forum' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/forum'>
            Forum Management
            </Button>

            </div>
        </div>
      
    </CustomCard>
  )
}

export default StaticSideBar
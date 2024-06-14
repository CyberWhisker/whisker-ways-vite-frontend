import React from 'react'
import CustomCard from './CustomCard'
import { Button, Divider, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { Dashboard, Favorite, Home, Map, Search } from '@mui/icons-material';

function StaticSideBar() {
    const location = useLocation();
    const currentLocation = location.pathname;
    const userType = 'vet';
  return (
    <div className='' style={{height: '750px'}}>
      <CustomCard>
        {userType == "admin" && (
          <div className="mb-2 p-4 w-full h-full">
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
              <Button variant={currentLocation == '/admin/request' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} href='/admin/request'>
              Pet Owner Request
              </Button>
              <Button variant={currentLocation == '/admin/dating' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/admin/dating'>
              Pet Dating
              </Button>
              <Button variant={currentLocation == '/admin/clinics' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/admin/clinic'>
              List of Vet Clinics
              </Button>
              <Button variant={currentLocation == '/forum' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/forum'>
              Forum Management
              </Button>
            </div>
          </div>
        )}

        {userType == "vet" && (
          <div className="mb-2 p-4 w-full h-full">
            <Typography className='text-center' variant="h5" color="blue-gray">
            <label className='font-bold'>Vet Staff</label>
            </Typography>
            <Divider sx={{marginTop: 2}}/>
            <div className='space-y-4 mt-5'>
              <Button variant={currentLocation == '/vet' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/vet'>
              Home
              </Button>
              <Button variant={currentLocation == '/vet/details' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/vet/details'>
              Manage Details
              </Button>
              <Button variant={currentLocation == '/vet/clinic' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} href='/vet/clinic'>
              Verify Veterinary Clinic
              </Button>
              <Button variant={currentLocation == '/forum' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/forum'>
              Forum Management
              </Button>
            </div>
          </div>
        )}

        {userType == "shelter" && (
          <div className="mb-2 p-4 w-full">
            <Typography className='text-center' variant="h5" color="blue-gray">
            <label className='font-bold'>Vet Staff</label>
            </Typography>
            <Divider sx={{marginTop: 2}}/>
            <div className='space-y-4 mt-5'>
              <Button variant={currentLocation == '/shelter' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/shelter'>
              Home
              </Button>
              <Button variant={currentLocation == '/shelter/details' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/shelter/details'>
              Manage Shelter Details
              </Button>
              <Button variant={currentLocation == '/shelter/request' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} href='/shelter/request'>
              Manage Adoption Request
              </Button>
              <Button variant={currentLocation == '/shelter/pet' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} href='/shelter/pet'>
              Manage Pet of List
              </Button>
              <Button variant={currentLocation == '/forum' ? 'contained': 'outlined'} sx={{width: '100%'}} href='/forum'>
              Forum Management
              </Button>
            </div>
          </div>
        )}
        
      </CustomCard>
    </div>
  )
}

export default StaticSideBar
import React from 'react'
import MasterAdmin from '../../../../layouts/MasterAdmin'
import { Typography } from '@mui/material'
import { CustomCard } from '../../../../components'

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
    </MasterAdmin>
  )
}

export default DashBoard
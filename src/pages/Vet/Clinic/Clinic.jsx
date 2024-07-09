import React from 'react'
import MasterAdmin from '../../../layouts/MasterAdmin'
import { TextField, Typography } from '@mui/material'
import Edit from './Forms/Edit'

function Clinic() {
  return (
    <MasterAdmin>
        <div className='space-y-5'>
            <div>
                <Typography>
                    <label className='text-4xl font-bold'>Verify Veterinary Clinic</label>
                </Typography>
                <Typography>
                    Make verifications here. Click save when you're done. The admin will verify your credentials
                </Typography>
            </div>
            <Edit/>
        </div>
    </MasterAdmin>
  )
}

export default Clinic
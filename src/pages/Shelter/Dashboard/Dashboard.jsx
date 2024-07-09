import React from 'react'
import MasterAdmin from '../../../layouts/MasterAdmin'
import { Button, Card, Grid, Typography } from '@mui/material'
import { CustomCard } from '../../../components'

const Data = [
    {
      "title" : "🐾 Invitation for a Veterinary Clinic Outreach Program 🐾",
      "address" : "Dear Veterinary Clinics near Barangay 143, Zone 88, Manila,",
      "description" : "We're organizing a pet outreach program in Barangay 143 Zone 88, Manila, and urgently need a veterinary clinic's support. Can your clinic assist? Together, let's wag more, bark less!",
      "sender" : "Whisker Way",
    },
    {
      "title" : "🐾 Invitation for a Veterinary Clinic Outreach Program 🐾",
      "address" : "Dear Veterinary Clinics near Barangay 143, Zone 88, Manila,",
      "description" : "We're organizing a pet outreach program in Barangay 143 Zone 88, Manila, and urgently need a veterinary clinic's support. Can your clinic assist? Together, let's wag more, bark less!",
      "sender" : "Whisker Way",
    },
    {
      "title" : "🐾 Invitation for a Veterinary Clinic Outreach Program 🐾",
      "address" : "Dear Veterinary Clinics near Barangay 143, Zone 88, Manila,",
      "description" : "We're organizing a pet outreach program in Barangay 143 Zone 88, Manila, and urgently need a veterinary clinic's support. Can your clinic assist? Together, let's wag more, bark less!",
      "sender" : "Whisker Way",
    },
    {
      "title" : "🐾 Invitation for a Veterinary Clinic Outreach Program 🐾",
      "address" : "Dear Veterinary Clinics near Barangay 143, Zone 88, Manila,",
      "description" : "We're organizing a pet outreach program in Barangay 143 Zone 88, Manila, and urgently need a veterinary clinic's support. Can your clinic assist? Together, let's wag more, bark less!",
      "sender" : "Whisker Way",
    },
]

function Dashboard() {
    return (
        <MasterAdmin>
        <div className='space-y-5'>
            <Typography>
            <label className='text-4xl font-bold'>Messages</label>
            </Typography>
            <MessageList/>
        </div>
        </MasterAdmin>
    )
}

function MessageList() {
    return (
        <div className='space-y-5'>
        {Data.map((item, index) => (
            <div className='space-y-4'>
            <Typography>
                <label className='text-xl font-bold'>Message from Whisker Way</label>
            </Typography>
            <CustomCard key={index}>
                <div className='space-y-5'>
                <Typography>{item.title}</Typography>
                <Typography>{item.address}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>{item.sender}</Typography>
                <div className='flex justify-end gap-5'>
                    <Button variant='contained' color='error'>Decline</Button>
                    <Button variant='contained'>Accept</Button>
                </div>
                </div>
            </CustomCard>
            </div>
        ))}
        </div>
    )
}

export default Dashboard
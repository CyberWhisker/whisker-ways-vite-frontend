import React, { useState } from 'react'
import { Box, Card, Container, Stack, Typography, alpha } from '@mui/material'
import Master from '../../../layouts/Master'
import Data from './DataClinic.json'
import DataDonation from './DataDonation.json'
import { useParams } from 'react-router-dom'
import { CustomCard } from '../../../components'

function ShelterDetails() {
  return (
    <Master >
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
        className='space-y-5'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 15 },
          }}
        >
            <Content/>
            <Services/>
        </Container>
      </Box>
    </Master>
  )
}

function Content() {
    const {id} = useParams();
    const [data, setData] = useState(Data);
    const findById = (id) => {
        return data.find(item => item._id == id)
    }
    const dataItem = findById(id)

    return(
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 2
        }}>
            <Typography textAlign="center">
                <label className='text-5xl font-extrabold'>{dataItem.name}</label>
            </Typography>
            <Card style={{borderRadius: 10, width: '50%'}}>
                <img src={`/clinicImg/${dataItem.image}`} alt='PetImg'/>
            </Card>
            <Card sx={{padding: 2}}>
                <Stack spacing={2} sx={{ width: { xs: '100%', sm: '90%' } }}>
                    <Typography><strong>Address: </strong>{dataItem.address}</Typography>
                    <Typography><strong>Phone: </strong>{dataItem.phone}</Typography>
                    <Typography><strong>Email: </strong>{dataItem.email}</Typography>
                    <Typography><strong>Name: </strong>{dataItem.name}</Typography>
                    <Typography><strong>Status: </strong>{dataItem.status}</Typography>
                    <Typography><strong>Parking: </strong>{dataItem.parking}</Typography>
                </Stack>
            </Card>
        </Box>
    )
}

function Services() {
    const dataItem = DataDonation
    return (
     <Stack direction="row" width="100%" justifyContent="space-between" spacing={5}>
        {dataItem.map((item, index) => (
            <CustomCard key={index}>
                <Box>
                    <Typography>{item.accountType}</Typography>
                    <Typography>{item.accountNumber && item.accountNumber}{item.phoneNumber && item.phoneNumber}</Typography>
                    <Typography>{item.accountHolder}</Typography>
                </Box>
            </CustomCard>
        ))}
     </Stack>   
    )
}

export default ShelterDetails
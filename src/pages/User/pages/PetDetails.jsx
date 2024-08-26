import React, { useState } from 'react'
import Master from '../../../layouts/Master'
import { alpha, Button, Card, Grid, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import Data from './Data.json'
import { Link, useParams } from 'react-router-dom'

function PetDetails() {
  return (
    <Master>
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
        className='space-y-10'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 15 },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '90%' } }}>
            <Content/>
          </Stack>
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
  return (
    <Box>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Card elevation={10} sx={{
            borderRadius: 2,
          }}>
            <img src={`/petImg/${dataItem.image}`} alt='PetImg'/>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Stack direction="column" spacing={1}>
          <Typography variant='h3' fontWeight="bold">{dataItem.name}</Typography>
          <Typography fontWeight="bold">{dataItem.description}</Typography>
          <Typography>
            <strong>Type:</strong> {dataItem.species}
          </Typography>
          <Typography>
            <strong>Gender:</strong> {dataItem.gender}
          </Typography>
          <Typography>
            <strong>Breed:</strong> {dataItem.breed}
          </Typography>
          <Typography>
            <strong>Neutered:</strong> {dataItem.neutered ? 'Yes' : 'No'}
          </Typography>
          <Typography>
            <strong>Age (In Months):</strong> {dataItem.age}
          </Typography>
          <Typography>
            <strong>Personality:</strong> {dataItem.personality}
          </Typography>
          <Typography>
            <strong>Shelter:</strong> {dataItem.location}
          </Typography>
          <Button variant='contained' component={Link} to={`/user/adoption/${dataItem._id}`}>Adopt</Button>
        </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PetDetails
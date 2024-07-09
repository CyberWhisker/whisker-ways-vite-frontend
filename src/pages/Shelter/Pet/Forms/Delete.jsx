import { Button, Card, Typography } from '@mui/material'
import React from 'react'

function Delete({toggleModal}) {
  return (
    <Card className='w-full'>
      <div className='p-5 bg-red-500'>
        <Typography>
          <label className='font-bold text-xl'>Are you sure to delete?</label>
        </Typography>
      </div>
      <div className='p-5 border-b-2'>
          <Typography>
            <label>This will permanently delete the account</label>
          </Typography>
      </div>
      <div className='p-5 flex justify-end space-x-2'>
          <Button onClick={toggleModal} variant='contained' color='inherit'>Cancel</Button>
          <Button variant='contained' color="error">Delete</Button>
      </div>
    </Card>
  )
}

export default Delete
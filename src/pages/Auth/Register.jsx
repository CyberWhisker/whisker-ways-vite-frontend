import React from 'react'
import { LayoutMasterAuth } from '../../layouts'
import { Box } from '@mui/material'
import { CustomCard } from '../../components'
import AppImg from '/appImg/WEB_6.png'
import RegisterForm from './Forms/RegisterForm'

function Register() {
  return (
    <LayoutMasterAuth>
      <Box
      sx={{
        height: 700,
        px: {xs: 5, sm: 20},
        py: {xs: 60, sm: 20}
      }}
      >
        <div className='h-full items-center flex'>
          <div className='grid lg:grid-cols-2 gap-5  w-full'>
            <div>
              <CustomCard>
                <RegisterForm/>
              </CustomCard>
            </div>
            <div className=' opacity-50 flex items-end flex-col'>
              <img src={AppImg} alt='IMG'/>
            </div>
          </div>
        </div>
      </Box>
    </LayoutMasterAuth>
  )
}

export default Register
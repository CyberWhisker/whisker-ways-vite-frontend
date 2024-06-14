import React, { useState } from 'react'
import MasterAdmin from '../../../../layouts/MasterAdmin'
import { CustomCard, Modal, SliderModal, Table } from '../../../../components'
import { Box, Button, Typography } from '@mui/material';
import View from './Forms/View';
import Edit from './Forms/Edit';
import Delete from './Forms/Delete';

const columns = [
  { id: '_id', 
    label: 'Clinic ID'
    
  },
  { id: 'name', 
    label: 'Clinic Name'},
  {
    id: 'address',
    label: 'Address',
  },
  {
    id: 'phone',
    label: 'Phone Number',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'services',
    label: 'Services',
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  {
    "_id": 1,
    "name": "Clinic1",
    "address": "Adddress",
    "phone": 9123456789,
    "email": "test@gmail.com",
    "services": "Services",
  }
]

function Request() {
  const [viewModal, setViewModal] = useState();
  const [editModal, setEditModal] = useState();
  const [deleteModal, setDeleteModal] = useState();
  return (
    <MasterAdmin>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <Typography>
            <label className='font-bold text-4xl'>Clinic List</label>
          </Typography>
          <Filter/>
        </div>
        <CustomCard>
          <Table columns={columns} rows={rows} toggleView={() => setViewModal(!viewModal)} toggleEdit={() => setEditModal(!editModal)} toggleDelete={() => setDeleteModal(!deleteModal)}/>
        </CustomCard>
      </div>
      <SliderModal isOpen={viewModal} toggleModal={() => setViewModal(!viewModal)}>
        <View/>
      </SliderModal>
      <SliderModal isOpen={editModal} toggleModal={() => setEditModal(!editModal)}>
        <Edit/>
      </SliderModal>
      <Modal isOpen={deleteModal} toggleModal={() => setDeleteModal(!deleteModal)}>
        <Delete isOpen={deleteModal} toggleModal={() => setDeleteModal(!deleteModal)}/>
      </Modal>
    </MasterAdmin>
  )
}

function Filter() {
  return(
    <div className='flex space-x-2'>
      <Button variant='outlined' size='small'>All</Button>
      <Button variant='outlined' size='small'>For Approval</Button>
      <Button variant='outlined' size='small'>Approved</Button>
      <Button variant='outlined' size='small'>Denied</Button>
    </div>
  )
}

export default Request
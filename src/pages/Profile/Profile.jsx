import React, { useState } from 'react'
import { CustomCard, Modal, SliderModal, Table } from '../../components'
import { Box, Button, TextField, Typography } from '@mui/material';
import View from './Forms/View';
import Edit from './Forms/Edit';
import Delete from './Forms/Delete';
import MasterAdmin from '../../layouts/MasterAdmin';
import Master from '../../layouts/Master';
import EditProfile from './Forms/EditProfile';
import Store from './Forms/Store';

const columns = [
  { id: '_id', 
    label: 'Clinic ID'
    
  },
  { id: 'name', 
    label: 'Pet Name'},
  {
    id: 'type',
    label: 'Type',
  },
  {
    id: 'neutered',
    label: 'Neutered',
  },
  {
    id: 'age',
    label: 'Age',
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  {
    "_id": 1,
    "name": "Jorge",
    "type": "Dog",
    "neutered": "Neutered",
    "age": 12,
  }
]

function Profile() {
  const [storeModal, setStoreModal] = useState();
  const [viewModal, setViewModal] = useState();
  const [editModal, setEditModal] = useState();
  const [deleteModal, setDeleteModal] = useState();
  return (
    <MasterAdmin>
      <div className='flex flex-col gap-4'>
        <EditProfile/>
        <div className='flex justify-between'>
          <Typography>
            <label className='font-bold text-4xl'>Pet List</label>
          </Typography>
          <Button variant='contained' onClick={() => setStoreModal(!storeModal)}>Add Pets</Button>
        </div>
        <CustomCard>
          <Table columns={columns} rows={rows} toggleView={() => setViewModal(!viewModal)} toggleEdit={() => setEditModal(!editModal)} toggleDelete={() => setDeleteModal(!deleteModal)}/>
        </CustomCard>
      </div>
      <SliderModal isOpen={storeModal} toggleModal={() => setStoreModal(!storeModal)}>
        <Store/>
      </SliderModal>
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



export default Profile
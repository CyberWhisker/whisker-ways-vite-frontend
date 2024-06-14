import React, { useState } from 'react'
import MasterAdmin from '../../../../layouts/MasterAdmin'
import { CustomCard, Modal, SliderModal, Table } from '../../../../components'
import { Box, Button, Typography } from '@mui/material';
import View from './Forms/View';
import Edit from './Forms/Edit';
import Delete from './Forms/Delete';

const columns = [
  { id: '_id', 
    label: 'Pet ID'
    
  },
  { id: 'name', 
    label: 'Pet Name'},
  {
    id: 'type',
    label: 'Type',
  },
  {
    id: 'breed',
    label: 'Breed',
  },
  {
    id: 'age',
    label: 'Age',
  },
  {
    id: 'neutered',
    label: 'Neutered',
  },
  {
    id: 'personality',
    label: 'Personality',
  },
  {
    id: 'shelterId',
    label: 'Shelter ID',
  },
];

const rows = [
  {
    "_id": 1,
    "name": "India",
    "type": "Dog",
    "breed": "Bulldog",
    "age": 21,
    "neutered": "Neutered",
    "personality": "Personality",
    "shelterId": 21
  }
]

function Dating() {
  const [viewModal, setViewModal] = useState();
  const [editModal, setEditModal] = useState();
  const [deleteModal, setDeleteModal] = useState();
  return (
    <MasterAdmin>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <Typography>
            <label className='font-bold text-4xl'>Pet Dating</label>
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

export default Dating
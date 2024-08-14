import React, { useState } from 'react'
import MasterAdmin from '../../../../layouts/MasterAdmin'
import { CustomCard, Modal, SliderModal, Table } from '../../../../components'
import { Box, Button, Typography } from '@mui/material';
import View from './Forms/View';
import Edit from './Forms/Edit';
import Delete from './Forms/Delete';

const columns = [
  { id: '_id', 
    label: 'User ID'
    
  },
  { id: 'last_name', 
    label: 'Last Name'},
  {
    id: 'first_name',
    label: 'First Name',
  },
  {
    id: 'middle_name',
    label: 'Middle Name',
  },
  {
    id: 'role',
    label: 'Role',
  },
  {
    id: 'contact',
    label: 'contact',
  },
  {
    id: 'email',
    label: 'email',
  },
  {
    id: 'address',
    label: 'address',
  },
];

const rows = [
  {
    _id: 1,
    last_name: "India",
    first_name: "Dog",
    last_name: "Bulldog",
    role: "Admin",
    contact: 91234567498,
    email: "test@email.com",
    address: "Test Address"
  }
]

function User() {
  const [viewModal, setViewModal] = useState();
  const [editModal, setEditModal] = useState();
  const [deleteModal, setDeleteModal] = useState();
  return (
    <MasterAdmin>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <Typography>
            <label className='font-bold text-4xl'>User List</label>
          </Typography>
          {/* <Filter/> */}
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

export default User
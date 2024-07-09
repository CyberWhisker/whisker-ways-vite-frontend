import React, { useState } from 'react'
import MasterAdmin from '../../../layouts/MasterAdmin'
import { Modal, SliderModal, Table } from '../../../components';
import Store from './Forms/Store';
import View from './Forms/View';
import Edit from './Forms/Edit';
import Delete from './Forms/Delete';
import EditShelter from './Forms/EditShelter';
import Typography from '@mui/material/Typography'

const columns = [
    { id: '_id', 
      label: 'Shelter ID'
      
    },
    { id: 'name', 
      label: 'Shelter Name'},
    {
      id: 'city',
      label: 'City',
    },
    {
      id: 'zip',
      label: 'Zip Code',
    },
    {
      id: 'phone_number',
      label: 'Phone Number',
    },
    {
      id: 'email',
      label: 'Email',
    },
  ];

const rows = [
    {
      "_id": 1,
      "name": "Jorge",
      "address": "123 Main St",
      "city": "Manila",
      "zip": 62704,
      "phone_number": "(217) 555-1234",
      "email": "info@sunshine.org",
    }
  ]

function Details() {
  const [storeModal, setStoreModal] = useState();
  const [viewModal, setViewModal] = useState();
  const [editModal, setEditModal] = useState();
  const [deleteModal, setDeleteModal] = useState();
  return (
    <MasterAdmin>
        <EditShelter/>

        <Typography variant="h4" color="text.primary" fontWeight="bold" mt={2}>Shelter Details</Typography>

        <Table columns={columns} rows={rows} toggleView={() => setViewModal(!viewModal)} toggleEdit={() => setEditModal(!editModal)} toggleDelete={() => setDeleteModal(!deleteModal)}/>
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

export default Details
import React, { useState } from 'react'
import MasterAdmin from '../../../layouts/MasterAdmin'
import Typography from '@mui/material/Typography'
import { Modal, SliderModal, Table } from '../../../components';
import Store from './Forms/Store';
import View from './Forms/View';
import Edit from './Forms/Edit';
import Delete from './Forms/Delete';
import EditShelter from './Forms/EditShelter';

const columns = [
    { id: '_id', 
      label: 'Adoption ID'
      
    },
    { id: 'name', 
      label: 'Adopter Name'},
    {
      id: 'pet_name',
      label: 'Pet Name',
    },
    {
      id: 'pet_type',
      label: 'Pet Type',
    },
    {
      id: 'request_date',
      label: 'Request Date',
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
      "pet_name": "Bella",
      "pet_type": "Dog",
      "request_date": 62704,
      "phone_number": "(217) 555-1234",
      "email": "info@sunshine.org",
    }
  ]

function Adoption() {
  const [storeModal, setStoreModal] = useState();
  const [viewModal, setViewModal] = useState();
  const [editModal, setEditModal] = useState();
  const [deleteModal, setDeleteModal] = useState();
  return (
    <MasterAdmin>
        <Typography variant="h4" fontWeight="bold">Adoption Request</Typography>
        
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

export default Adoption
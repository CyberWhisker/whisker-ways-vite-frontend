import React, { useState } from 'react'
import MasterAdmin from '../../../layouts/MasterAdmin'
import Typography from '@mui/material/Typography'
import { Modal, SliderModal, Table } from '../../../components';
import Store from './Forms/Store';
import View from './Forms/View';
import Edit from './Forms/Edit';
import Delete from './Forms/Delete';


const columns = [
    { id: '_id', 
      label: 'Shelter ID'
      
    },
    { id: 'name', 
      label: 'Pet Name'},
    {
      id: 'pet_type',
      label: 'Pet Type',
    },
    {
      id: 'breed',
      label: 'Breed',
    },
    {
      id: 'age',
      label: 'Age',
    },
  ];

const rows = [
    {
      "_id": 1,
      "name": "Jorge",
      "pet_type": "Dog",
      "breed": "Labrador",
      "age": 3,
    }
  ]


function Pet() {
    const [storeModal, setStoreModal] = useState();
    const [viewModal, setViewModal] = useState();
    const [editModal, setEditModal] = useState();
    const [deleteModal, setDeleteModal] = useState();
  return (
    <MasterAdmin>
        <Typography variant="h4" fontWeight="bold">Shelter Pet</Typography>
        
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

export default Pet
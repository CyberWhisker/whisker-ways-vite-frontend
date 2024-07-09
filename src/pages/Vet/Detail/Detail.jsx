import React, { useState } from 'react'
import MasterAdmin from '../../../layouts/MasterAdmin'
import EditClinic from './Forms/EditClinic'
import { Modal, SliderModal } from '../../../components'
import Store from './Forms/Store'
import View from './Forms/View'
import Edit from './Forms/Edit'
import Delete from './Forms/Delete'

function Detail() {
    const [storeModal, setStoreModal] = useState();
    const [viewModal, setViewModal] = useState();
    const [editModal, setEditModal] = useState();
    const [deleteModal, setDeleteModal] = useState();
  return (
    <MasterAdmin>
        <EditClinic/>
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

export default Detail
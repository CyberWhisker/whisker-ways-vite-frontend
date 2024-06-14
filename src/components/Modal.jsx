// Modal.js
import React from 'react';
import { motion } from 'framer-motion';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: { delay: 0.1 },
  },
};

const Modal = ({ isOpen, toggleModal, children }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          onClick={() => toggleModal(false)}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-1/2 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;

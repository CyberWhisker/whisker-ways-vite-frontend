import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Button, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

function SliderModal({ isOpen, toggleModal, children }) {
    const theme = useTheme();

    return (
        <div className="relative">
            {/* Overlay for dimming the background */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-auto"
                        style={{
                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleModal}
                    ></motion.div>
                )}
            </AnimatePresence>

            {/* Modal container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-y-0 right-0 z-50 w-full lg:w-1/2 shadow-md"
                        style={{
                            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff'
                        }}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                    >
                        <Box variant='outlined'>
                            <div className='py-5 h-full overflow-hidden flex flex-col'>
                                <div className='overflow-y-auto px-10'>
                                    <div className='flex justify-end'>
                                        <Button onClick={toggleModal}>
                                            <Close/>
                                        </Button>
                                    </div>
                                    {children}
                                </div>
                            </div>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SliderModal;

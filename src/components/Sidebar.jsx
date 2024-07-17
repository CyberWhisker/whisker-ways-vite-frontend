import React from 'react';
import { Box, Card } from '@mui/material';
import Navlist from './Navlist';

function Sidebar() {
    return (
        <Card sx={{height: "100%"}}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, padding: 2}}>
                <Navlist/>
            </Box>
        </Card>
    )
}

export default Sidebar
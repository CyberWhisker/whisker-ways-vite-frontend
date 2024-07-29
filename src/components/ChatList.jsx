import { Person } from '@mui/icons-material'
import { Box, Card, Divider, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function ChatList() {
    const location = useLocation();
    const pathName = location.pathname
    const currentPath = pathName.split("/")

    const ChatData = [
        {
        name: "Chat Name"
        }
    ]
    return (
        <Card sx={{padding: 1, boxShadow: 5}}>
            <Typography fontWeight="bold" variant='h6'>Chats:</Typography>
            <Divider sx={{marginY: "10px"}}/>
            {ChatData.map((item, index) => (
                <MenuItem key={index} sx={{borderRadius: '20px'}} component={Link} to={`/${currentPath[1]}/forum/message`}>
                    <Box
                    sx={{
                        borderRadius: '50%',
                        overflow: 'hidden',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'grey.300',
                        marginRight: 2
                    }}
                    >
                        <Person sx={{ width: '80%', height: '80%' }} />
                    </Box>
                    <Typography color='primary.main'>{item.name}</Typography>
                </MenuItem>
            ))}
        </Card>
    )
    }
  
export default ChatList
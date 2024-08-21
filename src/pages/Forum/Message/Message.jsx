import React, { useEffect, useRef } from 'react'
import MasterAdmin from '../../../layouts/MasterAdmin'
import Master from '../../../layouts/Master'
import { Box, Button, Card, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material'
import {ChatList} from '../../../components'
import { Person, Send } from '@mui/icons-material'

function Message() {
  if (localStorage.getItem("userType") == "user" || localStorage.getItem("userType") == "null") {
    return (
      <Master>
        <Grid container spacing={3} sx={{px: 15, pt: 12}}>
          <Grid item xs={3}>
            <ChatList/>
          </Grid>
          <Grid item xs={9}>
            <ChatBox/>
          </Grid>
        </Grid>   
      </Master>
    )
  } else {
    return (
      <MasterAdmin>
        <Grid container spacing={3} sx={{height: "100%"}}>
          <Grid item xs={3} sx={{display: {xs:'none', md: 'block'}}}>
            <ChatList/>
          </Grid>
          <Grid item xs={12} md={9} >
            <ChatBox/>
          </Grid>
        </Grid>
      </MasterAdmin>
    )
  }
}

function ChatBox() {
  return (
    <Card sx={{ boxShadow: 5, height: "68vh", display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            borderRadius: "50%",
            overflow: "hidden",
            width: 30,
            height: 30,
            marginRight: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Person sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Typography fontWeight="bold" variant='h6'>Chat Name</Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'hidden' 
        }}
      >
        <Box sx={{ flex: 1, overflowY: 'auto', }}>
          <Messages />
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Divider />
          <MessageForm />
        </Box>
      </Box>
    </Card>
  );
}

function MessageForm() {
  return(
    <Box padding={2} sx={{display: 'flex', gap: 2}}>
      <TextField label="Write Text here" size='small' sx={{width: "100%"}}/>
      <Button variant="contained" endIcon={<Send />}>
        Send
      </Button>
    </Box>
  )
}

function Messages() {
  const MessageData = [
    {
      userID: 1,
      message: "Hello! How are you doing today?",
      createdAt: "2024-06-29T08:15:23.456+00:00"
    },
    {
      userID: 2,
      message: "I'm doing well, thank you! How about you?",
      createdAt: "2024-07-29T08:16:45.789+00:00"
    },
    {
      userID: 1,
      message: "I'm great, thanks for asking! Just working on a new project.",
      createdAt: "2024-07-29T08:17:30.123+00:00"
    },
    {
      userID: 2,
      message: "That sounds exciting! What kind of project is it?",
      createdAt: "2024-07-29T08:18:05.678+00:00"
    },
    {
      userID: 1,
      message: "It's a web application for managing tasks. I've been learning a lot about React lately.",
      createdAt: "2024-07-29T08:19:15.234+00:00"
    },
    {
      userID: 2,
      message: "React is a great choice! I've also been working with it recently. What do you like most about it?",
      createdAt: "2024-07-29T08:20:42.345+00:00"
    },
    {
      userID: 1,
      message: "I love how component-based it is and how it makes managing state so much easier.",
      createdAt: "2024-07-29T08:21:10.456+00:00"
    },
    {
      userID: 2,
      message: "Absolutely! The virtual DOM is a game changer for performance as well.",
      createdAt: "2024-07-29T08:22:05.567+00:00"
    },
    {
      userID: 1,
      message: "Definitely. I'm also experimenting with hooks. They make functional components much more powerful.",
      createdAt: "2024-07-29T08:23:20.678+00:00"
    },
    {
      userID: 1,
      message: "Definitely. I'm also experimenting with hooks. They make functional components much more powerful.",
      createdAt: "2024-07-29T08:23:20.678+00:00"
    },
    {
      userID: 2,
      message: "Hooks are fantastic. They simplify a lot of complex state logic. Keep up the great work!",
      createdAt: "2024-07-29T08:24:30.789+00:00"
    },
    {
      userID: 2,
      message: "Hooks are fantastic. They simplify a lot of complex state logic. Keep up the great work!",
      createdAt: "2024-07-29T08:24:30.789+00:00"
    },
    {
      userID: 2,
      message: "Hooks are fantastic. They simplify a lot of complex state logic. Keep up the great work!",
      createdAt: "2024-07-29T08:24:30.789+00:00"
    },
    {
      userID: 2,
      message: "Hooks are fantastic. They simplify a lot of complex state logic. Keep up the great work!",
      createdAt: "2024-07-29T08:24:30.789+00:00"
    },
    {
      userID: 2,
      message: "Last",
      createdAt: "2024-05-29T08:24:30.789+00:00"
    },
    {
      userID: 2,
      message: "First",
      createdAt: "2024-08-29T08:24:30.789+00:00"
    },
  ];
  // Sort messages by createdAt in descending order
  const endOfMessagesRef = useRef(null);
  const sortedMessageData = MessageData.slice().sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  useEffect(() => {
    // Scroll to the bottom when the component mounts
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sortedMessageData]);
  const currentUserID = 1;
  let prevUserID = null;
  return (
    <Box sx={{ padding: 2, overflowY: 'auto', height: '100%' }}>
      <Grid container spacing={2}>
        {sortedMessageData.map((item, index) => {
          const showIcon = item.userID !== prevUserID 
          prevUserID = item.userID
          if (item.userID === currentUserID) {
            return (
              <React.Fragment key={index}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', gap: 1 }}>
                    {showIcon ? (
                      <Box
                        sx={{
                          borderRadius: '50%',
                          overflow: 'hidden',
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginLeft: 1,
                          bgcolor: 'grey.300'
                        }}
                      >
                          <Person sx={{ width: '80%', height: '80%' }} />
                      </Box>
                    ) : (
                      <Box paddingX={3}></Box>
                    )}
                    <Paper
                      sx={{
                        padding: 2,
                        bgcolor: 'primary.light',
                        borderRadius: 2,
                        flex: 1
                      }}
                    >
                      <Typography variant="body2" color="black">{item.message}</Typography>
                    </Paper>
                  </Box>
                </Grid>
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment key={index}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', gap: 1 }}>
                    {showIcon ? (
                      <Box
                        sx={{
                          borderRadius: '50%',
                          overflow: 'hidden',
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginLeft: 1,
                          bgcolor: 'grey.300'
                        }}
                      >
                          <Person sx={{ width: '80%', height: '80%' }} />
                      </Box>
                    ) : (
                      <Box paddingX={3}></Box>
                    )}
                    <Paper
                      sx={{
                        padding: 2,
                        bgcolor: 'primary.light',
                        borderRadius: 2,
                        flex: 1
                      }}
                    >
                      <Typography variant="body2" color="black">{item.message}</Typography>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={6}></Grid>
              </React.Fragment>
            )
          }
        })}
        <Box ref={endOfMessagesRef} />
      </Grid>
    </Box>
  );
}

export default Message
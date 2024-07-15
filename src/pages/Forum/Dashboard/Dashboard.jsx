import React from 'react';
import MasterAdmin from '../../../layouts/MasterAdmin';
import Master from '../../../layouts/Master';
import { Box, Button, Card, Container, Divider, Grid, MenuItem, Toolbar, Typography } from '@mui/material';
import { CustomCard } from '../../../components';
import { Person, PinDrop, Share, ThumbUp } from '@mui/icons-material';

const PostList = [
  {
    name: "First Name Last Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, recusandae vel corporis libero numquam culpa sequi velit est ut, commodi at nostrum cum ea. Suscipit quos voluptates accusantium voluptatibus neque.",
    image: "Cat.png"
  },
  {
    name: "First Name Last Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, recusandae vel corporis libero numquam culpa sequi velit est ut, commodi at nostrum cum ea. Suscipit quos voluptates accusantium voluptatibus neque.",
    image: "Cat.png"
  },
  {
    name: "First Name Last Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, recusandae vel corporis libero numquam culpa sequi velit est ut, commodi at nostrum cum ea. Suscipit quos voluptates accusantium voluptatibus neque.",
    image: "Cat.png"
  },
];

function Dashboard() {
  return (
    <Master>
      <Container sx={{ mt: { sm: 20, xs: 15 } }}>
        <Grid container spacing={2}>
          <Grid item lg={9}>
            <Post />
          </Grid>
          <Grid item lg={3}>
            <ChatList/>
          </Grid>
        </Grid>
      </Container>
    </Master>
  );
}

function Post() {
  return (
    <Grid container spacing={2}>
      {PostList.map((item, index) => (
        <Grid item key={index} xs={12} lg={12}>
          <CustomCard>
            <Box width="100%">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: 40,
                      height: 40,
                      marginRight: 2,
                      textAlign: 'center',
                      justifyItems: 'center',
                    }}
                  >
                    <Person />
                  </Box>
                  <Typography color="primary.main">{item.name}</Typography>
                </Box>
                <Button variant='contained'>Message</Button>
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Typography>{item.description}</Typography>
              <Box sx={{ height: 300, overflow: "hidden" }}>
                <img
                  src={`/petImg/${item.image}`}
                  alt="No Image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Divider sx={{marginY: 2}}/>
              <Tools/>
            </Box>
          </CustomCard>
        </Grid>
      ))}
    </Grid>
  );
}

function Tools() {
  return (
    <Toolbar>
      <MenuItem sx={{borderRadius: "10px"}}>
        <ThumbUp/>
      </MenuItem>
      <MenuItem sx={{borderRadius: "10px"}}>
        <Share/>
      </MenuItem>
      <MenuItem sx={{borderRadius: "10px"}}>
        <PinDrop/>
      </MenuItem>
    </Toolbar>
  )
}

function ChatList() {
  const ChatData = [
    {
      name: "Chat Name"
    }
  ]
  return (
    <Card sx={{padding: 2}}>
      <Typography fontWeight="bold" variant='h6'>Chat:</Typography>
      <Divider sx={{marginY: "10px"}}/>
      {ChatData.map((item) => (
        <MenuItem sx={{borderRadius: '20px'}}>
          <Box height="20" borderRadius="100%">
            <Person/>
          </Box>
          <Typography color='primary.main' sx={{marginLeft: 2}}>{item.name}</Typography>
        </MenuItem>
      ))}
    </Card>
  )
}

export default Dashboard;

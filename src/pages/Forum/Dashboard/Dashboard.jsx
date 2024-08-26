import React, { useState } from 'react';
import MasterAdmin from '../../../layouts/MasterAdmin';
import Master from '../../../layouts/Master';
import { Box, Button, Card, Container, Divider, Grid, MenuItem, Toolbar, Typography } from '@mui/material';
import { ChatList, CustomCard, SliderModal } from '../../../components';
import { Person, PinDrop, ThumbUp } from '@mui/icons-material';
import CommentModal from './Modals/CommentModal';
import { Link } from 'react-router-dom';
import LocationModal from './Modals/LocationModal';

const PostList = [
  {
    id: 1,
    name: "First Name Last Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, recusandae vel corporis libero numquam culpa sequi velit est ut, commodi at nostrum cum ea. Suscipit quos voluptates accusantium voluptatibus neque.",
    image: "Cat.png"
  },
  {
    id: 2,
    name: "First Name Last Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, recusandae vel corporis libero numquam culpa sequi velit est ut, commodi at nostrum cum ea. Suscipit quos voluptates accusantium voluptatibus neque.",
    image: null
  },
  {
    id: 3,
    name: "First Name Last Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, recusandae vel corporis libero numquam culpa sequi velit est ut, commodi at nostrum cum ea. Suscipit quos voluptates accusantium voluptatibus neque.",
    image: "Cat.png"
  },
];

function Dashboard() {
  const [open, setOpen] = useState();
  if (localStorage.getItem("userType") == "user" || localStorage.getItem("userType") == null) {
    return (
      <Master>
        <Container sx={{mt: {md: 13, xs: 10}}}>
          <Grid container spacing={2}>
            <Grid item lg={9} xs={12}>
              <Post open={open} setOpen={setOpen}/>
            </Grid>
            <Grid item lg={3} sx={{display: {xs: 'none', md: 'block'}}}>
              <ChatList/>
            </Grid>
          </Grid>
        </Container>
        <SliderModal isOpen={open} toggleModal={() => setOpen(!open)}>
          <LocationModal/>
        </SliderModal>
      </Master>
    );
  } else {
    return (
      <MasterAdmin>
          <Grid container spacing={2}>
            <Grid item lg={9}>
              <Post />
            </Grid>
            <Grid item lg={3}>
              <ChatList/>
            </Grid>
          </Grid>
      </MasterAdmin>
    );
  }
}

function Post({open, setOpen}) {
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
                      alignItems: 'center',
                      justifyItems: 'center',
                  }}
                  >
                      <Person sx={{width: '100%', height: '100%'}}/>
                  </Box>
                  <Typography color="primary.main">{item.name}</Typography>
                </Box>
                <Button variant='contained' component={Link} to={`/forum/message`}>Message</Button>
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Typography>{item.description}</Typography>
              {item.image && (
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
              )}
              <Divider sx={{marginY: 2}}/>
              <Toolbar>
                <MenuItem sx={{borderRadius: "10px"}}>
                  <ThumbUp/>
                </MenuItem>
                <MenuItem sx={{borderRadius: "10px"}}>
                  <CommentModal data={item}/>
                </MenuItem>
                <MenuItem sx={{borderRadius: "10px"}}>
                  <PinDrop onClick={() => setOpen(!open)}/>
                </MenuItem>
              </Toolbar>
            </Box>
          </CustomCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;

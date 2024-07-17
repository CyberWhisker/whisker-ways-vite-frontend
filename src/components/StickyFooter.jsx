import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Facebook, Instagram, X, YouTube } from '@mui/icons-material';
import { Card } from '@mui/material';

export default function StickyFooter() {
  return (
    <Card
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        borderRadius: 0
      }}
    >
      <Container maxWidth="lg">
        <div className='grid lg:grid-cols-4 justify-between gap-5'>
          <div>
            <Typography variant="body1">
              <label className='text-xl font-bold'>
                Whisker Way
              </label>
            </Typography>
            <Typography>
                <label>
                  ©2024, Technotubbies or affiliates.
                </label>
            </Typography>
          </div>
          <div>
            <Typography>
              Create an account
            </Typography>
            <Typography>
              Log In
            </Typography>
          </div>
          <div>
            <Typography>
              Finder Tools
            </Typography>
            <Typography variant="body1">
              Contact Us
            </Typography>
          </div>
          <div>
            <Typography>
              Follow us on
            </Typography>
            <div className='flex space-x-2'>
              <Facebook/>
              <Instagram/>
              <X/>
              <YouTube/>
            </div>
          </div>
        </div>
      </Container>
    </Card>
  );
}
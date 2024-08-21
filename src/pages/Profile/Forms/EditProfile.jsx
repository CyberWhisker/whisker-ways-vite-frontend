import { Button, Card, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { SliderModal } from '../../../components';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function EditProfile() {
    const [toggleEditProfile, setToggleEditProfile] = useState(true);
    const [editAddress, setEditAddress] = useState(false);
  return (
    <div className='space-y-3'>
        <div className='flex justify-between'>
          <Typography>
            <label className='font-bold text-4xl'>Hello, Username</label>
          </Typography>
          <Stack direction={'row'} spacing={2}>
            <Button variant='contained' onClick={() => setEditAddress(!editAddress)}>Pin Address</Button>
            {toggleEditProfile ? (
              <Button variant='contained' color='warning' onClick={() => setToggleEditProfile(!toggleEditProfile)}>Edit Profile</Button>
            ): (
              <Button variant='contained' onClick={() => setToggleEditProfile(!toggleEditProfile)}>Save Changes</Button>
            )}
          </Stack>
        </div>
        <Form toggleEditProfile={toggleEditProfile}/>
        
        <SliderModal isOpen={editAddress} toggleModal={() => setEditAddress(!editAddress)}>
            <PinAddress/>
        </SliderModal>
    </div>
  )
}

function Form({toggleEditProfile}) {
  return (
    <div className='space-y-3'>
      <TextField variant='outlined' size='small' label='First Name' sx={{width: '100%'}} disabled={toggleEditProfile}/>
      <TextField variant='outlined' size='small' label='Last Name' sx={{width: '100%'}} disabled={toggleEditProfile}/>
      <TextField variant='outlined' size='small' label='Email' sx={{width: '100%'}} disabled={toggleEditProfile}/>
      <TextField variant='outlined' size='small' label='Password' sx={{width: '100%'}} disabled={toggleEditProfile}/>
      <TextField variant='outlined' size='small' label='City' sx={{width: '100%'}} disabled={toggleEditProfile}/>
      <TextField variant='outlined' size='small' label='ZIP code' sx={{width: '100%'}} disabled={toggleEditProfile}/>
    </div>
  )
}

// Custom hook to handle map view changes
const useFlyTo = (position, zoom) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom); // Fly to the new position with the given zoom level
    }
  }, [position, zoom, map]);
};

function FlyToLocation({ position, zoom }) {
  useFlyTo(position, zoom);
  return null; // This component does not render anything
}

function PinAddress() {
  const [latitude, setLatitude] = useState(12.879721);
  const [longitude, setLongitude] = useState(121.774017);
  const [position, setPosition] = useState([latitude, longitude]);
  const [zoom, setZoom] = useState(5); // Default zoom level

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          setZoom(13); // Set zoom level (adjust as needed)
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant='h4' fontWeight='bold' textAlign='center'>
        Pin Address
      </Typography>
      <Stack spacing={2}>
        <TextField
          label='Latitude'
          value={position[0]}
          onChange={(e) => setLatitude(parseFloat(e.target.value))}
          type='number'
          step='any'
        />
        <TextField
          label='Longitude'
          value={position[1]}
          onChange={(e) => setLongitude(parseFloat(e.target.value))}
          type='number'
          step='any'
        />
        <Button variant='contained' onClick={handleGetCurrentLocation}>
          Get Current Location
        </Button>
      </Stack>
      <Card>
        <MapContainer
          center={position}
          zoom={zoom}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              You are here.
            </Popup>
          </Marker>
          <FlyToLocation position={position} zoom={zoom} />
        </MapContainer>
      </Card>
      <Button variant='contained' color='warning'>
        Save Changes
      </Button>
    </Stack>
  );
}

export default EditProfile
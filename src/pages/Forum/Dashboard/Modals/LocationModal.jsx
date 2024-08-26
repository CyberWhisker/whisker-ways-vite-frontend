import { PinDrop } from '@mui/icons-material'
import { Box, Typography, Stack, Card } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function LocationModal() {
  return (
    <Box>
        <Typography variant='h4' fontWeight="bold" textAlign="center">Location</Typography>
        <PinAddress/>
    </Box>
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

    return (
    <Stack spacing={2}>
        <Card sx={{height: '80vh'}}>
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
    </Stack>
    );
}

export default LocationModal
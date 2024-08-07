import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Email, LocationCity, Phone, Web } from '@mui/icons-material';
import {SliderModal,CustomCard} from '../../../components';
import StoreMessageForm from '../Forms/StoreMessageForm';

const Data = [
    {
        "title": "Animal Rescue PH",
        "phone": "02-123-4567",
        "email": "animalrescueph@yahoo.com",
        "address": "123 Main Street, Quezon City, Metro Manila",
        "web": "animalrescueph.org"
    },
    {
        "title": "Shelter Care PH",
        "phone": "02-987-6543",
        "email": "sheltercareph@gmail.com",
        "address": "789 Oak Street, Pasig City, Metro Manila",
        "web": "sheltercareph.org"
    },
    {
        "title": "Paw Print PH",
        "phone": "02-456-7890",
        "email": "pawprintsph@outlook.com",
        "address": "678 Walnut Street, Parañaque City, Metro Manila",
        "web": "pawprintsph.org"
    },
    {
        "title": "Compassionate Vets ",
        "phone": "02-789-0123",
        "email": "compassionatevets@yahoo.com",
        "address": "890 Birch Street, Manila City, Metro Manila",
        "web": "compassionatevetsph.com"
    },
    {
        "title": "Metro Vet Clinic",
        "phone": "02-345-6789",
        "email": "metrovetclinic@outlook.com",
        "address": "321 Maple Avenue, Mandaluyong City, Metro Manila",
        "web": "metrovetclinicph.com"
    },
    {
        "title": "Pet Care Clinic",
        "phone": "02-876-5432",
        "email": "petcareclinic@gmail.com",
        "address": "456 Elm Street, Makati City, Metro Manila",
        "web": "petcareclinicph.com"
    },
    {
        "title": "Vet Solutions",
        "phone": "02-890-1234",
        "email": "vetsolutionsph@hotmail.com",
        "address": "234 Cedar Street, Marikina City, Metro Manila",
        "web": "vetsolutionsph.com"
    },
    {
        "title": "Metro Animal Clinic PH",
        "phone": "02-345-6789",
        "email": "metroanimalclinicph.com",
        "address": "567 Pine Street, Taguig City, Metro Manila",
        "web": "metroanimalclinicph.com"
    }
  
]

export default function Contact() {
    const [messageModal, setMessageModal] = useState();
    return (
        <Box
        id="hero"
        sx={() => ({
            width: '100%',
        })}
        >
        <Container
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
            }}
        >
            <Typography>
            <label className='font-extrabold text-5xl'>Contact Us</label>
            </Typography>
            <ContactList toggleModal={() => setMessageModal(!messageModal)}/>
        </Container>
        <SliderModal isOpen={messageModal} toggleModal={() => setMessageModal(!messageModal)}>
            <StoreMessageForm/>
        </SliderModal>
        </Box>
    );
}

function ContactList({toggleModal}) {
    return(
        <div className='grid lg:grid-cols-2 gap-10 w-full'>
            {Data.map((item, index) => (
                <div onClick={toggleModal} className='cursor-pointer'  key={index}>
                    <CustomCard>
                        <div className='space-y-6'>
                            <Typography><label className='font-bold text-xl'>{item.title}</label></Typography>

                            <div className='flex space-x-5'>
                                <Phone/>
                                <Typography>{item.phone}</Typography>
                            </div>
                            <div className='flex space-x-5'>
                                <Email/>
                                <Typography>{item.email}</Typography>
                            </div>
                            <div className='flex space-x-5'>
                                <LocationCity/>
                                <Typography>{item.address}</Typography>
                            </div>
                            <div className='flex space-x-5'>
                                <Web/>
                                <Typography>{item.address}</Typography>
                            </div>
                        </div>
                    </CustomCard>
                </div>
            ))}
        </div>
    )
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ArrowDropDown} from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const Data = [
    {
        "title": "How do I adopt a pet from your center?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        "title": "Are your pets vaccinated and spayed/neutered?",
        "description": "Yes, all of our pets receive vaccinations and are spayed/neutered before they're available for adoption. We believe in providing our animals with the best possible start to their new lives.",
    },
    {
        "title": "Do you have a return policy?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        "title": "Can I bring my current pets to meet a potential new pet?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        "title": "What if I have allergies to pets?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        "title": "How can I support your organization if I'm unable to adopt?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  
]

export default function Faq() {
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
          <label className='font-extrabold text-5xl'>FAQs</label>
        </Typography>
        <FaqList/>
      </Container>
    </Box>
  );
}

function FaqList() {
    return(
        <div className='w-full'>
            {Data.map((item, index) => (
            <Accordion key={index}>
                <AccordionSummary
                    expandIcon={<ArrowDropDown />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography><label className='font-bold font-2xl'>{item.title}</label></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    {item.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            ))}
        </div>
    )
}
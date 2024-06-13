// LandingPage.js
import React from 'react';
import {LayoutMaster} from '../../layouts';
import { CssBaseline } from '@mui/material';
import { LandingHero, LandingFinder, LandingPartner, LandingAbout, LandingContact, LandingFaq } from './Sections';

const LandingPage = () => {
  return (
    <LayoutMaster>
        <CssBaseline />
        <div className='space-y-24'>
            <section id='hero'>
                <LandingHero/>
            </section>
            <section id='finder'>
                <LandingFinder/>
            </section>
            <section id='partner'>
                <LandingPartner/>
            </section>
            <section id='about'>
                <LandingAbout/>
            </section>
            <section id='contact'>
                <LandingContact/>
            </section>
            <section id='faq'>
                <LandingFaq/>
            </section>
        </div>
    </LayoutMaster>
  );
};

export default LandingPage;

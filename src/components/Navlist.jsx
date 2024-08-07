import { Dashboard, Favorite, Map, Search } from '@mui/icons-material';
import { Button, Divider, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navlist({setopen}) {
    const userType = localStorage.getItem("userType")
    const location = useLocation();
    return (
        <React.Fragment>
            {location.pathname == '/' && (
                <NavLanding setopen={setopen}/>
            )}
            {location.pathname.startsWith('/user') && (
                <NavUser/>
            )}
            {(userType == "admin" && location.pathname != '/' && !location.pathname.startsWith('/user')) && (
                <NavAdmin/>
            )}
            {(userType == "vet" && location.pathname != '/' && !location.pathname.startsWith('/user')) && (
                <NavVet/>
            )}
            {(userType == "shelter" && location.pathname != '/' && !location.pathname.startsWith('/user')) && (
                <NavShelter/>
            )}
        </React.Fragment>
    )
}

function NavLanding({setopen}) {
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
            top: targetScroll,
            behavior: 'smooth',
            });
        }
        setopen(false);
    };
    return (
        <React.Fragment>
            <MenuItem  onClick={() => scrollToSection('finder')}>
                <Typography color="primary.main">Finder Tools</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('partner')}>
                <Typography color="primary.main">Our Partners</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('about')}>
                <Typography color="primary.main">About Us</Typography>
                
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('contact')}>
                <Typography color="primary.main">Contact Us</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('faq')}>
                <Typography color="primary.main">FAQ</Typography>
            </MenuItem>
        </React.Fragment>
    )
}

function NavUser() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <MenuItem onClick={() => navigate('/user/petfinder')}>
                <Typography color="primary.main">
                    <Search/>&nbsp;
                    Finder Tools
                </Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate('/user/petdating')}>
                <Typography color="primary.main">
                    <Favorite/>&nbsp;
                    Pet Dating
                </Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate('/user/clinic')}>
                <Typography color="primary.main">
                    <Map/>&nbsp;
                    Vet Clinic Locator
                </Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate('/forum')}>
                <Typography color="primary.main">
                    <Dashboard/>&nbsp;
                    Forum
                </Typography>
            </MenuItem>
        </React.Fragment>
    )
}

function NavAdmin() {
    const location = useLocation();
    return (
        <React.Fragment>
                <Typography variant='h5' fontWeight="bold" textAlign="center">Welcome Admin</Typography>
            <Divider/>
            <Button variant={location.pathname == '/admin' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/admin">
                Dashboard
            </Button>
            <Button variant={location.pathname == '/admin/pet' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/admin/pet">
                List of Pets
            </Button>
            <Button variant={location.pathname == '/admin/request' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} component={Link} to="/admin/request">
                Pet Owner Request
            </Button>
            <Button variant={location.pathname == '/admin/dating' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/admin/dating">
                Pet Dating
            </Button>
            <Button variant={location.pathname == '/admin/clinics' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/admin/clinics">
                List of Vet Clinics
            </Button>
            <Button variant={location.pathname == '/forum' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/forum">
                Forum Management
            </Button>
        </React.Fragment>
    )
}

function NavVet() {
    const location = useLocation();

    return (
        <React.Fragment>
            <Typography variant='h5' fontWeight="bold" textAlign="center">
                Vet Staff
            </Typography>
            <Divider/>
            <Button variant={location.pathname == '/vet' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/vet">
                Home
            </Button>
            <Button variant={location.pathname == '/vet/details' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/vet/details">
                Manage Details
            </Button>
            <Button variant={location.pathname == '/vet/clinic' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} component={Link} to="/vet/clinic">
                Verify Veterinary Clinic
            </Button>
            <Button variant={location.pathname == '/forum' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/forum">
                Forum Management
            </Button>
        </React.Fragment>
    )
}

function NavShelter() {
    const location = useLocation();
    return (
        <React.Fragment>
            <Typography variant='h5' fontWeight="bold" textAlign="center">
                Shelter Staff
            </Typography>
            <Divider/>
            <Button variant={location.pathname == '/shelter' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/shelter">
                Home
            </Button>
            <Button variant={location.pathname == '/shelter/details' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/shelter/details">
                Manage Shelter Details
            </Button>
            <Button variant={location.pathname == '/shelter/adoption' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} component={Link} to="/shelter/adoption">
                Adoption Request
            </Button>
            <Button variant={location.pathname == '/shelter/pet' ? 'contained': 'outlined'} sx={{width: '100%', textAlign: 'center'}} component={Link} to="/shelter/pet">
                Manage Pet of List
            </Button>
            <Button variant={location.pathname == '/forum' ? 'contained': 'outlined'} sx={{width: '100%'}} component={Link} to="/forum">
                Forum Management
            </Button>
        </React.Fragment>
    )
}

export default Navlist

// import { React } from 'react';
import { Tab, Tabs, Button, Typography } from '@mui/material';
import { useState } from 'react';
// import { styled } from '@mui/material/styles';
import './navbar.modules.css';
import Box from '@mui/material/Box';
import logo from './../../assets/logo.png';

export default function Navbar(){
    let primary = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    let [value, setValue] = useState('one');

    let handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <Box sx={{height:"96px", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={logo} alt="medify" />
            <Typography className="logo"
                sx={{fontSize:"18px", fontWeight:"700", color:primary, marginLeft:"20px"}}
            >Medify</Typography>
            <Tabs value={value}
                onChange={handleChange}
                textColor= "primary" 
                indicatorColor= "primary" 
            >
                <Tab value="one" label="Find Doctors" sx={{textTransform:'none'}} ></Tab>
                <Tab value="two" label="Hospitals" sx={{textTransform:'none'}}></Tab>
                <Tab value="three" label="Medicines" sx={{textTransform:'none'}}></Tab>
                <Tab value="four" label="Surgeries" sx={{textTransform:'none'}}></Tab>
                <Tab value="five" label="Software for Providers" sx={{textTransform:'none'}}></Tab>
                <Tab value="six" label="Facilities" sx={{textTransform:'none'}}></Tab>
                <Button sx={{textTransform:'none', backgroundColor:primary, height:"40px", width:"130px", marginLeft:"20px"}} variant="contained">My Bookings</Button>
            </Tabs>
        </Box>
    )
}
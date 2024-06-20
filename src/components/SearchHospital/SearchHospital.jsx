import './searchHospital.modules.css';
import {Box, TextField, Typography} from '@mui/material';
import {Grid} from '@mui/material';
import {Paper} from '@mui/material';
import {InputBase} from '@mui/material';
import {IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '@mui/material';
import OptionsCard from '../OptionCard/OptionCard';
import {useEffect, useState} from 'react';
import HospitalIcon from './../../assets/Hospital-icon.png';
import AmbulanceIcon from './../../assets/Ambulance-icon.png';
import CapsuleIcon from './../../assets/Capsule-icon.png';
import DoctorIcon from './../../assets/Doctor-icon.png';
import DrugstoreIcon from './../../assets/Drugstore-icon.png';

export default function SearchHospital(){
    let primary = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    let secondary = window.getComputedStyle(document.documentElement).getPropertyValue('--second');
    let [selectedCard, setSelectedCard] = useState(null);
    let handleCardClick = (value)=>{
        // console.log(value);
        setSelectedCard(value);
    }
    //writing useeffect to see if chard changes to which card
    useEffect(()=>{
        // console.log("useeffect ",selectedCard);
    },[selectedCard]);

    return(<Paper elevation={2} sx={{position:"relative", color:'white', top:"-35vh"}} className="wrapper2">
        <Grid container  spacing={3} direction="column" sx={{height:"100%", width:"100%", backgroundColor:"white", margin:"0px"}}>
            <Grid item sx={{color:'black', padding:"0px", height:"20%",marginBottom:"0px"}}>
                <Grid container component="form" justifyContent={'space-around'} sx={{height:"100%", width:"100%"}}>
                    <Grid item  sx={{color:'black', height:"100%", width:"285px"}}>
                        <Box>
                            <Paper elevation={0} sx={{backgroundColor:secondary, border:"1px solid gray", display:"flex",alignItems:"center",height:"50px"}}>
                                <IconButton type="button">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase placeholder="State" />
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item sx={{color:'black', height:"100%" , width:"285px"}}>
                        <Box>
                            <Paper elevation={0} sx={{backgroundColor:secondary, border:"1px solid gray", display:"flex",alignItems:"center",height:"50px"}}>
                                <IconButton type="button">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase placeholder="City" />
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item sx={{color:'black', height:"100%"}}>
                        <Box>
                            <Button sx={{textTransform:"none",color:"white", backgroundColor:primary}}>
                                <IconButton type="button" sx={{color:"white"}}>
                                    <SearchIcon />
                                </IconButton>
                                Search
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{color:'black', height:"70%"}}>
                <Box sx={{height:"15%", width:"100%", paddingBottom:"30px"}} >
                    <Typography fontWeight={500} fontSize={"20px"} fontFamily={"Poppins"}>You may be looking for</Typography>
                </Box>
                <Box sx={{height:"85%", padding:"0px"}}>
                    <Grid container columnGap={3} sx={{height:"85%"}}>
                        <Grid item onClick={()=>{handleCardClick("doctor")}}>
                            <OptionsCard icon={DoctorIcon} selected={selectedCard==='doctor'} text={"Doctor"} />
                        </Grid>
                        <Grid item onClick={()=>{handleCardClick("drugstore")}}>
                            <OptionsCard icon={DrugstoreIcon} selected={selectedCard==='drugstore'} text={"Drugstore"} />
                        </Grid>
                        <Grid item onClick={()=>{handleCardClick("hospital")}}>
                            <OptionsCard icon={HospitalIcon} selected={selectedCard==='hospital'} text={"Hospital"} />
                        </Grid>
                        <Grid item onClick={()=>{handleCardClick("medicalStore")}}>
                            <OptionsCard icon={CapsuleIcon} selected={selectedCard==='medicalStore'} text={"Medical Store"} />
                        </Grid>
                        <Grid item onClick={()=>{handleCardClick("ambulance")}}>
                            <OptionsCard icon={AmbulanceIcon} selected={selectedCard==='ambulance'} text={"Ambulance"} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Paper>)
}
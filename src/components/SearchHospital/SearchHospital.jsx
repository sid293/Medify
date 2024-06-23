import './searchHospital.modules.css';
import {Box, TextField, Typography} from '@mui/material';
import {Grid} from '@mui/material';
import {Paper} from '@mui/material';
import {IconButton} from '@mui/material';
import {FormControl, FormHelperText} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '@mui/material';
import OptionsCard from '../OptionCard/OptionCard';
// import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import HospitalIcon from './../../assets/Hospital-icon.png';
import AmbulanceIcon from './../../assets/Ambulance-icon.png';
import CapsuleIcon from './../../assets/Capsule-icon.png';
import DoctorIcon from './../../assets/Doctor-icon.png';
import DrugstoreIcon from './../../assets/Drugstore-icon.png';
import {Select, MenuItem} from '@mui/material';


export default function SearchHospital(){
    let navigate = useNavigate();
    let primary = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    let secondary = window.getComputedStyle(document.documentElement).getPropertyValue('--second');
    let [selectedCard, setSelectedCard] = useState(null);
    let [location, setLocation] = useState({state:"",city:""});
    let [states, setState] = useState([]);
    let [cities, setCities] = useState([]);
    let [error, setError] = useState(false);
    let handleCardClick = (value)=>{
        // console.log(value);
        setSelectedCard(value);
    }
    //writing useeffect to see if chard changes to which card
    useEffect(()=>{
        let getStates = ()=>{
            fetch("https://meddata-backend.onrender.com/states").then((res)=>res.json()).then((data)=>{
                setState(data);
            }).catch((err)=>{
                console.log("error is ", err);
            })
        }
        getStates();
        if(location.state !== ""){
            fetch(`https://meddata-backend.onrender.com/cities/${location.state}`).then(response => response.json()).then((data)=>{
                setCities(data);
            }).catch((err)=>{
                console.log("error is ", err);
            })
        }
    },[location]);
    
    let handleSearch = ()=>{
        // console.log("searching");
    }

    let formSubmit = (event)=>{
        console.log("form submitted");
        event.preventDefault();
        console.log("error is ",error);
        if(location.city === ""){
            setError(true);
            return;
        }
        navigate("/hospitals",{state:location});
    }

    return(<Paper elevation={2} sx={{position:"relative", color:'white', top:"-35vh"}} className="wrapper2">
        <Grid container  spacing={3} direction="column" sx={{height:"100%", width:"100%", backgroundColor:"white", margin:"0px"}}>
            <Grid item sx={{color:'black', padding:"0px", height:"20%",marginBottom:"0px"}}>
            <form onSubmit={formSubmit}>
                <FormControl fullWidth sx={{flexDirection:"row",justifyContent:"space-around"}} onSubmit={formSubmit}>
                        <Box>
                            <Select 
                                value={location.state}
                                startAdornment={<SearchIcon />}
                                onChange={(event)=>{setLocation((prev)=>({state:event.target.value,city:""}))}}
                                displayEmpty
                                sx={{width:"300px", textAlign:"left"}}
                            >
                                <MenuItem selected disabled value="">State</MenuItem>
                                {states.map((state)=>{
                                    return <MenuItem value={state}>{state}</MenuItem>
                                })}
                            </Select>
                        </Box>
                        <Box>
                            <Select 
                                value={location.city}
                                startAdornment={<SearchIcon />}
                                displayEmpty
                                onChange={(event)=>{setLocation((prev)=>({...prev,city:event.target.value}))}}
                                sx={{width:"300px", textAlign:"left"}}
                            >
                                <MenuItem selected disabled value="">City</MenuItem>
                                {cities.map((state)=>{
                                    return <MenuItem value={state}>{state}</MenuItem>
                                })}
                            </Select>
                        </Box>
                        <Box>
                            <Button onClick={handleSearch} type={"submit"} sx={{textTransform:"none",color:"white", backgroundColor:primary}}>
                                <IconButton type="button" sx={{color:"white"}}>
                                    <SearchIcon />
                                </IconButton>
                                Search
                            </Button>
                        </Box>
                {error && <FormHelperText>Enter inputs.</FormHelperText>}
                </FormControl>
                </form>
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
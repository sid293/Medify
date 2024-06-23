
import { Box } from "@mui/material"
// import SearchHospital from './../../../components/SearchHospital/SearchHospital';
import SearchHospital from './../components/SearchHospital/SearchHospital';
import { FormControl, InputLabel, MenuItem, Select, Button, Grid, Typography } from "@mui/material";
import React from "react"
import ad from "./../assets/results/ad.png"
import TextField  from '@mui/material/TextField';

import {IconButton} from "@mui/material";
import { useNavigate } from "react-router-dom";
import checkIcon from './../assets/results/checkIcon.png';
import ResultCard from './../components/ResultCard/ResultCard';
import { useState , useEffect} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

export default function Resultspage({loc="sample", bookings=false}){
    let primary = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    let secondary = window.getComputedStyle(document.documentElement).getPropertyValue('--second');
    let [location, setLocation] = useState(loc);
    let [states, setState] = useState(["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]);
    let [cities, setCities] = useState(["city1","city2"]);
    let [error, setError] = useState(false);
    let [results, setResults] = useState([{"Hospital Name":"hosip1","age":23},{"Hospital Name":"hosip2","age":28}]);
    let [myBookings, setMyBookings] = useState([]);
    let [hospitalToSearchBy, setHospitaltoSearchBy] = useState("");

    let formSubmit = (event)=>{
        event.preventDefault();
        if (location.state === "" || location.city === "") {
            setError(true);
        } else {
            setError(false);
            console.log('handle search ', location);
            getResults();
        }
    }

    let handleSearch = ()=>{
    }

    let searchByHospital = ()=>{
        let Mybookings;
        if(hospitalToSearchBy===""){
            Mybookings =JSON.parse(localStorage.getItem("bookings"));
            // setMyBookings(myBookingsList);
        }else{
            Mybookings = myBookings.filter((booking)=>{
                let string = booking["name"].toLowerCase();
                let substring = hospitalToSearchBy.toLowerCase();
                return string.includes(substring);
            });
        }
        setMyBookings(Mybookings);
    }


    let getResults = ()=>{
        // console.log(location.state,location.city);
        console.log("get results");
        fetch(`https://meddata-backend.onrender.com/data?state=${location.state}&city=${location.city}`)
            .then((res) =>
                res.json())
            .then((data) => {
                console.log("data for city and state", data);
                setResults(data);
            }).catch((err) => {
                console.log("error is ", err);
            })
    }

    useEffect(() => {
        let getStates = () => {
            fetch("https://meddata-backend.onrender.com/states").then((res) => res.json()).then((data) => {
                setState(data);
            }).catch((err) => {
                console.log("error is ", err);
            })
        }
        getStates();
        if (location.state !== "") {
            fetch(`https://meddata-backend.onrender.com/cities/${location.state}`).then(response => response.json()).then((data) => {
                setCities(data);
            }).catch((err) => {
                console.log("error is ", err);
            })
        }
    }, [location]);

    useEffect(()=>{
        if (location.city !== "") {
            getResults();
        }
        //gettting bookings if exist
        if(localStorage.getItem("bookings")===null){
            // myBookingsList=[];
            console.log("no bookings");
        }else{
            let myBookingsList=JSON.parse(localStorage.getItem("bookings"));
            setMyBookings(myBookingsList);
        }
    },[]);

    useEffect(()=>{
        results.map((result) => {
            console.log("results useeffect", result["Hospital Name"]);
        })
    },[results]);

    return(
        <div>
            <Box sx={{ height: "fit-content", bgcolor: primary, width: "100%", borderRadius: "0px 0px 16px 16px" }}>
                {!bookings ? 
                    <Box sx={{
                        height: "7rem",
                        width: "85vw",
                        borderRadius: "15px",
                        position: "relative",
                        bgcolor: "white",
                        display: "flex",
                        alignItems: "center",
                        top: "4rem", left: "7vw"
                    }}>
                        <form onSubmit={formSubmit} style={{ width: "100%" }}>
                            <FormControl fullWidth sx={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }} onSubmit={formSubmit}>
                                <Box sx={{ color: "gray" }}>
                                    <Select
                                        value={location.state}
                                        startAdornment={<LocationOnIcon />}
                                        onChange={(event) => { setLocation((prev) => ({ state: event.target.value, city: "" })) }}
                                        displayEmpty
                                        sx={{ width: "300px", textAlign: "left", color: "gray" }}
                                    >
                                        <MenuItem selected sx={{ color: "gray" }} disabled value="">State</MenuItem>
                                        {states.map((state) => {
                                            return <MenuItem value={state}>{state}</MenuItem>
                                        })}
                                    </Select>
                                </Box>
                                <Box>
                                    <Select
                                        value={location.city}
                                        startAdornment={<LocationOnIcon />}
                                        displayEmpty
                                        onChange={(event) => { setLocation((prev) => ({ ...prev, city: event.target.value })) }}
                                        sx={{ width: "34rem", textAlign: "left", color: "gray" }}
                                    >
                                        <MenuItem selected disabled value="">City</MenuItem>
                                        {cities.map((state) => {
                                            return <MenuItem value={state}>{state}</MenuItem>
                                        })}
                                    </Select>
                                </Box>
                                <Box>
                                    <Button onClick={handleSearch} type={"submit"} sx={{ textTransform: "none", color: "white", backgroundColor: primary }}>
                                        <IconButton type="button" sx={{ color: "white" }}>
                                            <SearchIcon />
                                        </IconButton>
                                        Search
                                    </Button>
                                </Box>
                                {error && <p>Enter inputs.</p>}
                            </FormControl>
                        </form>
                    </Box>
                    :
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                        <Typography sx={{
                            fontFamily:"Ubuntu",
                            fontSize:"40px",
                            fontWeight:"700",
                            color:"white",
                            textAlign:"center",
                        }}>My Bookings</Typography>
                        <Box sx={{
                            width: "780px",
                            height: "104px",
                            borderRadius: "15px",
                            bgcolor: "white",
                            margin: "auto",
                            display:"flex",
                            justifyContent:"space-around",
                            alignItems:"center",
                            position:"relative",
                            top:"3rem"
                        }}>
                                <TextField variant="outlined" onChange={(e)=>{setHospitaltoSearchBy(e.target.value)}} label="Search By Hospital" sx={{
                                    width:"77%",
                                    bgcolor:"white",
                                }}>{hospitalToSearchBy}</TextField>
                                <Button variant="contained" onClick={searchByHospital} sx={{bgcolor:primary, height:"3.5rem"}}>
                                    <SearchIcon />
                                    Search
                                </Button>
                        </Box>
                    </Box>
                }
            </Box>
            
            <Box className="resultsPageBody" sx={{ display: "flex", justifyContent: "center", width: "100%", height: "fit-content", bgcolor: secondary, pt: 15 }}>
                <Box className="resultsMainSection" sx={{ display: "flex", width: "85vw", textAlign: "left" }}>
                    <Box className="resultsSection" sx={{
                        width: "70%",
                    }}>
                        {bookings ||
                            <div>
                                <Typography variant="h4" sx={{
                                    color: "black",
                                    mt: 2,
                                    fontFamily: "Poppins",
                                    fontWeight: "500",
                                    fontSize: "24px"
                                }}>{results.length} medical centers available in {location.city}</Typography>
                                <Typography sx={{
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    color: "rgba(120, 120, 135, 1)"
                                }}>
                                    <img src={checkIcon} alt="check" style={{ width: "20px", height: "20px" }} />
                                    vBook appointments with minimum wait-time & verified doctor details
                                </Typography>
                            </div>
                        }

                        {bookings ? 
                            myBookings.map((booking) => (
                                <div>
                                    <ResultCard name={booking.name} address={booking.address} bookingTime={booking.time} bookingDate={booking.date} />
                                </div>
                            ))
                        :
                            results.map((result) => (
                            <div>
                                <ResultCard name={result["Hospital Name"]} address={`${result['City']}, ${result['County Name']}`} />
                            </div>
                        ))}
                    </Box>
                    <Box className="adsSection" sx={{ width: "30%" }}>
                        <Box className="ad" sx={{
                            my: bookings?4:13,
                            height: "269px",
                            width: "100%",
                            borderRadius: "15px"
                        }}>
                            <img src={ad} style={{ height: "100%", width: "100%" }} alt="ads" />
                        </Box>
                    </Box>
                </Box>

            </Box>
        </div>
    )
}
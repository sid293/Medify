

import './resultCard.modules.css';
import { Box, Typography, Button } from "@mui/material"
import HospitalIcon from "./../../assets/results/hospitalIcon.png";
// import LikeIcon from './../../assets/results/likeIcon.png'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from "react"
import {format, add} from  "date-fns"
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@mui/material';
// import { Link } from "react-router-dom"
import Divider from '@mui/material/Divider';
// import Swiper from "swiper";
import { SwiperSlide,Swiper } from "swiper/react";

import {Navigation,Pagination, Scrollbar, A11y} from 'swiper/modules';
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css";



export default function ResultCard({ name, address, bookingTime="", bookingDate=""}) {
    let primary = window.getComputedStyle(document.body).getPropertyValue('--primary');

    let [selectedDate, setSelectedDate] = useState(0);
    let [selectedTime, setSelectedTime] = useState({date:"",time:""});
    let [showBookingTimings, setShowBookingTimings] = useState(false);
    let [open, setOpen] = useState(false);
    // Create an array of objects to store the data from the Swiper slides
    let date = new Date();
    const formattedDate = format(date, 'EEE, d MMM');
    const swiperSlideData = [
        {
            date: 'Today',
            slotsAvailable: 11
        },
        {
            date: 'Tomorrow',
            slotsAvailable: 17
        },
        {
            date: format((add(date,{days:2})),'EEE, d MMM'),
            slotsAvailable: 18
        },
        {
            date: format((add(date,{days:3})),'EEE, d MMM'),
            slotsAvailable:10 
        },
        {
            date: format((add(date,{days:4})),'EEE, d MMM'),
            slotsAvailable: 15
        },
        {
            date: format((add(date,{days:5})),'EEE, d MMM'),
            slotsAvailable: 12
        },
    ];
    let availableTimings = {
        Morning: ["11:30AM"],
        Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    }


    let dateClickHandler = (index)=>{
        // console.log("handle date click");
        setSelectedDate(index);
    }
    let handleDialog = (decision)=>{
        setOpen(false);
        if(decision === "cancel"){
            console.log("cancel");
            return;
        }
        //adding data to localstorage
        if(!localStorage.getItem("bookings")){
            localStorage.setItem("bookings", JSON.stringify([]));
        }
        let bookings = JSON.parse(localStorage.getItem("bookings"));
        selectedTime = {...selectedTime,name:name, address:address};
        bookings.push((selectedTime));
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }
    let bookTime = (time)=>{
        let dat = swiperSlideData[selectedDate]["date"];
        if(dat === "Today"){
            // dat = formattedDate;
            dat = format(new Date(),'EEE, d MMM');
        }
        if(dat === "Tomorrow"){
            dat = format((add(date, {days:1})), 'EEE, d MMM');
        }
        console.log(time,dat);
        setSelectedTime({date:dat, time:time});
        // confirmation dialog box
        setOpen(true);
    }

    //creating an array of objects based on data in swiper slides tags in below code of date and slots available

    return(
        <Box sx={{
            // border:"2px solid red",
            height:"fit-content",
            bgcolor:"white",
            borderRadius: "15px",
            width: "95%",
            my: 4,
        }}>
            <Box sx={{
                height: "269px",
                bgcolor: "white",
                display: "flex",
                justifyContent: "start",
            }}>
                <Box className="iconSec" sx={{
                    width: "20%",
                }}>
                    <img src={HospitalIcon} alt="icon" width="100%" height="50%" />
                </Box>
                <Box className="hospitalData" sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    px: "10px"
                }}>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "20px",
                        color: primary

                    }}>{name}</Typography>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        fontSize: "14px",
                    }}>{address}</Typography>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontSize: "14px",
                    }}>Smilessence Center for Advanced Dentistry + 1 more <br />
                        {bookingTime === "" &&
                           <div> <span style={{ fontFamily: "Poppins", fontWeight: "700", fontSize: "14px", color: primary }}>FREE</span> <span style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "14px", color: "rgba(120, 120, 135, 1)" }}><s>₹500</s></span> Consultation fee at clinic</div>
                        }
                        </Typography>
                    <Button sx={{
                        bgcolor: primary,
                        width: "44px",
                        height: "22px",
                        padding: "0px"
                    }}>
                        <ThumbUpIcon sx={{ color: "white", width: "14px", height: "14px" }} />
                        <Typography sx={{ color: "white" }}>5</Typography>
                    </Button>

                </Box>
                {bookingTime === "" ?
                    <Box className="bookCallSection" sx={{
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",
                        pb: "20px",
                        pr: "10px"
                    }}>
                        <Typography sx={{
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            fontSize: "14px",
                            color: primary,
                            textAlign: "center"
                        }}>Available Today</Typography>
                        <Button variant="contained" onClick={() => { setShowBookingTimings(prev => !prev) }} color="primary" sx={{
                            textTransform: "none",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            fontSize: "14px",
                            mt: "10px",
                            bgcolor: primary
                        }}>
                            Book FREE Center Visit
                        </Button>
                    </Box>
                    :
                    <Box sx={{
                        width: "30%",
                        display: "flex",
                        justifyContent: "space-between",
                        pr: "20px",
                        pt: "20px"
                    }}>
                        <Box sx={{
                            width: "74px",
                            height: "31px",
                            borderRadius: "3px",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid green",
                            color: primary
                        }}>
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontSize: "14px",
                                fontWeight: "400",
                            }}>
                                {bookingTime}
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: "108px",
                            height: "32px",
                            borderRadius: "3px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            border: "1px solid green",
                            color: primary
                        }}>
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontSize: "14px",
                                fontWeight: "700",
                            }}>
                                {bookingDate}
                            </Typography>
                        </Box>
                    </Box>
                }
            </Box>
            <Divider sx={{}} />
            {/* <Box className="bookingSection" sx={{
                height: "269px",
            }}>
                <Divider sx={{}} />
                <Box className="swiperBox" sx={{
                    height:"25%",
                    width:"100%",
                    border:"2px solid red",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                </Box>
            </Box> */}
            { showBookingTimings &&  
            <Box className="bookingSection" sx={{
                height: "269px",
            }}>
                <Divider sx={{}} />
                <Box className="swiperBox" sx={{
                    height:"25%",
                    width:"100%",
                    // border:"2px solid red",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    <Swiper 
                        spaceBetween={0}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        padding="10px"
                    >
                        {swiperSlideData.map((slide, index) => (
                            <SwiperSlide key={index} onClick={()=>{dateClickHandler(index)}}>
                                <Typography sx={{
                                    fontFamily: "Lato",
                                    fontSize: "16px",
                                    fontWeight: "700"
                                }}>
                                    {slide.date}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "Lato",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    color: primary
                                }}>
                                    {slide.slotsAvailable} Slots Available
                                </Typography>
                                <Box className="selectedDate" sx={{
                                    width: "100%",
                                    height: "6px",
                                    bgcolor: "#F0F0F5"
                                }}>
                                    {selectedDate===index && <Box sx={{
                                        width:"100%",
                                        height:"100%",
                                        bgcolor:primary
                                    }}></Box>}
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </Box>
                <Box className="timings" sx={{
                    height:"70%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:'center',
                    alignItems:"center",
                    px:"1rem",
                }}>
                    <Box className="morningTimes" sx={{
                        height: "28%",
                        width: "95%",
                        display:"flex",
                        gap:"2rem",
                        justifyContent:"start",
                        alignItems:"center"
                    }}>
                        <Box >
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontSize: "14px",
                                fontWeight: "400"
                            }}>Morning</Typography>
                        </Box>
                            {availableTimings["Morning"].map((time) => (
                                <Button onClick={() => { bookTime(time) }} sx={{
                                    width: "84px",
                                    height: "31px",
                                    borderRadius: "3px",
                                    border: "1px solid rgba(42, 167, 255, 1)"
                                }}>
                                    <Typography sx={{
                                        fontFamily: "Lato",
                                        fontSize: "14px",
                                        fontWeight: "400"
                                    }}>{time}</Typography>
                                </Button>
                            ))}
                    </Box>
                        <Divider />
                        <Box className="afternoonTimes" sx={{
                            height: "28%",
                            width: "95%",
                            display: "flex",
                            gap: "2rem",
                            justifyContent: "start",
                            alignItems: "center"
                        }}>
                            <Box >
                                <Typography sx={{
                                    fontFamily: "Lato",
                                    fontSize: "14px",
                                    fontWeight: "400"
                                }}>Afternoon</Typography>
                            </Box>
                            {availableTimings["Afternoon"].map((time) => (
                                <Button onClick={() => { bookTime(time) }} sx={{
                                    width: "84px", height: "31px",
                                    borderRadius: "3px",
                                    border: "1px solid rgba(42, 167, 255, 1)"
                                }}>
                                    <Typography sx={{
                                        fontFamily: "Lato",
                                        fontSize: "14px",
                                        fontWeight: "400"
                                    }}>{time}</Typography>
                                </Button>
                            ))}

                        </Box>
                        <Divider />
                    <Box className="eveningTimes" sx={{
                        height: "28%",
                        width: "95%",
                        display:"flex",
                        gap:"2rem",
                        justifyContent:"start",
                        alignItems:"center"
                    }}>
                        <Box >
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontSize: "14px",
                                fontWeight: "400"
                            }}>Evening</Typography>
                        </Box>
                        {availableTimings["Evening"].map((time) => (
                            <Button onClick={() => { bookTime(time) }} sx={{
                                width: "84px", height: "31px",
                                borderRadius: "3px",
                                border: "1px solid rgba(42, 167, 255, 1)"
                            }}>
                                <Typography sx={{
                                    fontFamily: "Lato",
                                    fontSize: "14px",
                                    fontWeight: "400"
                                }}>{time}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Box>
            }
            <Dialog 
                open={open}
                onClose={()=>{handleDialog("cancel")}}
            >
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your appointment will be booked for {selectedTime.date} at {selectedTime.time}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{handleDialog("cancel")}}>Cancel</Button>
                    <Button onClick={()=>{handleDialog("book")}}>Book</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

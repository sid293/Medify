// import { ExpandMoreIcon } from '@material-ui/icons/ExpandMore'

import { Box, Typography } from "@mui/material"
import React from "react"
// import hero from './../assets/faq/hero'
// import left from './../assets/faq/left'
// import right from './../assets/faq/right'
import hero from "./../assets/faq/hero.png";
import left from "./../assets/faq/left.png";
import right from "./../assets/faq/right.png"
import Accorrdion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


let ExpandIcon = ()=>{
    return(<Typography
        fontFamily="Font Awesome 5 Free"
        fontSize="18px"
        fontWeight="900"
        color="rgba(42, 167, 255, 1)"
    >
        +
    </Typography>)
}


export default function Faq(){

    return(<Box sx={{height:"100vh"}}>
        <Typography
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="600"
            color="rgba(42, 167, 255, 1)"
        >
            Get Your Answer
        </Typography>
        <Typography
            fontFamily="Poppins"
            fontSize="48px"
            fontWeight="600"
            marginBottom={"3vw"}
        >
            Frequently Asked Questions
        </Typography>
        <Box sx={{padding:"0 6vw 0 6vw",height:"65%", display:"flex"}}>
            <Box sx={{height:"115%",width:"50%"}}>
                <img src={hero} alt="hero" style={{width:"100%",height:"100%"}}/>
                <img src={left} alt="left" style={{width:"41%",height:"26%",position:"relative",top:"-184px",left:"-134px"}}/>
                <img src={right} alt="right" style={{width:"20%",height:"20%",position:"relative",top:"-337px",left:"107px"}}/>
            </Box>
            <Box sx={{height:"100%",width:"50%",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
                <Accorrdion elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontFamily:"Poppins",
                            fontSize:"18px",
                            fontWeight:"600"
                        }}>Why choose our medical for your family?</Typography>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accorrdion>
                <Accorrdion elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontFamily:"Poppins",
                            fontSize:"18px",
                            fontWeight:"600"
                        }}>Why we are different from others?</Typography>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accorrdion>
                <Accorrdion elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontFamily:"Poppins",
                            fontSize:"18px",
                            fontWeight:"600"
                        }}>Trusted & experience senior care & love</Typography>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accorrdion>
                <Accorrdion elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontFamily:"Poppins",
                            fontSize:"18px",
                            fontWeight:"600"
                        }}>How to get appointment for emergency cases?</Typography>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accorrdion>

            </Box>
        </Box>
    </Box>)
}
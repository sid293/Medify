
import { Box, CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import { Card } from "@mui/material"
import { CardMedia } from "@mui/material"
import imgone from './../assets/families/iconone.png'
import imgtwo from './../assets/families/icontwo.png'
import imgthree from './../assets/families/iconthree.png'
import imgfour from './../assets/families/iconfour.png'
import FamiliesCard from "../components/FamiliesCard/FamiliesCard"

export default function Families(){
    let secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--second');

    return(<Box sx={{backgroundColor:secondaryColor, width:"100vw",height:"100vh",display:"flex",justifyContent:"start"}}>
        <Box sx={{padding:"0 5vw 0 5vw", width:"50vw", height:"100%", textAlign:"left", display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <Typography sx={{
                fontFamily:"Poppins",
                fontSize:"17px",
                color:"rgba(42, 167, 255, 1)",
                fontWeight:"600"
            }}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
            <Typography sx={{
                fontFamily:"Poppins",
                fontSize:"48px",
                color:"rgba(27, 60, 116, 1)",
                fontWeight:"600",
                marginBottom:"10px"
            }}>Our Families</Typography>
            <Typography sx={{
                fontFamily:"Inter",
                fontSize:"17px",
                color:"rgba(119, 130, 157, 1)",
                fontWeight:"500"

            }}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</Typography>

        </Box>
        <Box sx={{width:"50vw", height:"100%", display:"flex",justifyContent:"start",gap:"1vw"}}>
            <Box sx={{display:"flex",flexDirection:"column"}}>
                <Box>
                    <FamiliesCard img={imgone} num="5000+" name="Happy Patients" />
                </Box>
                <Box>
                    <FamiliesCard img={imgtwo} num="5000+" name="Happy Patients" />
                </Box>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column", justifyContent:"end"}}>
                <Box>
                    <FamiliesCard img={imgthree} num="5000+" name="Happy Patients" />
                </Box>
                <Box>
                    <FamiliesCard img={imgfour} num="5000+" name="Happy Patients" />
                </Box>
            </Box>
        </Box>
    </Box>)
}
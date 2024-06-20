import Navbar from './../Navbar/Navbar';
import Box from '@mui/material/Box';

export default function Header(){

    let c1 = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');

    return(
        <Box sx={{backgroundColor:c1}}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"40px",color:"white"}}>
                The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
            </Box>
            <Navbar />
        </Box>
    )
}
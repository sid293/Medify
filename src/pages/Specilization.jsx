import style from './specilization.modules.css';
// import {1,2,3,4,5,6,7} from './../assets/specilization';
import {Box, Typography, Grid, Button} from '@mui/material'
import OptionsCard from '../components/OptionCard/OptionCard';
import icon1 from '../assets/specilization/1.png';
import icon2 from '../assets/specilization/2.png';
import icon3 from '../assets/specilization/3.png';
import icon4 from '../assets/specilization/4.png';
import icon5 from '../assets/specilization/5.png';
import icon6 from '../assets/specilization/6.png';
import icon7 from '../assets/specilization/7.png';
import icon8 from '../assets/specilization/8.png';



export default function Specilization(){
    let secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary');

    return(<Box className={style.wrapper} sx={{height:"100vh", backgroundColor:secondaryColor}}>
        <Typography
            fontFamily="Poppins"
            fontSize="48px"
            fontWeight="600"
        >
            Find by specialisation
        </Typography>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Grid container spacing={5} sx={{width:"80vw",height:"75vh",margin:"0px",padding:"20px"}}>
                    <Grid item xs={3}>
                        <OptionsCard icon={icon1} selected={false} text={"Dentistry"} />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionsCard icon={icon2} selected={false} text={"Primary Care"} />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionsCard icon={icon3} selected={false} text={"Cardiology"} />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionsCard icon={icon4} selected={false} text={"MRI Resonance"} />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionsCard icon={icon5} selected={false} text={"Blood Test"} />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionsCard icon={icon6} selected={false} text={"Piscologist"} />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionsCard icon={icon7} selected={false} text={"Laboratory"} />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionsCard icon={icon8} selected={false} text={"X-Ray"} />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Button
                    variant="contained"
                    sx={{backgroundColor:"primary", color:"white",width:"100px",padding:"10px", height:"50px", textTransform:"none"}}
                >View All</Button>
            </Box>
        </Box>)
}
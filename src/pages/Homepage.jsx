import './homepage.modules.css';
import Header from '../components/Header/Header';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Item from '@mui/material/Item';
import Grid from '@mui/material/Grid';
import hero from './../assets/hero_image.png';
import SearchHospital from '../components/SearchHospital/SearchHospital';
// import Offers from './Offers';

export default function Homepage(){
    let secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    // let primaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    let primaryColor = "green";

    return(
        <Box styles={{backgroundColor:secondaryColor}}>
            <Header/>
            <Grid container justifyContent="center" alignItems="center" columns={16} sx={{height:"100vh", paddingLeft:"10vw", overflow:"hidden"}} >
                <Grid item lg={8}>
                    <Box sx={{textAlign:"left", marginBottom:"100px"}}>
                        <Typography
                            fontWeight={500}
                            fontFamily={"Poppins"}
                            fontSize={31}
                            textAlign={'left'}
                        >
                            Skip the travel! Find Online
                            <br/>
                            <Typography
                                fontSize={56}
                                fontWeight={700}
                                fontFamily={"Poppins"}
                            >Medical <span>Centers</span> </Typography>
                        </Typography>
                        <Typography
                            textAlign={'left'}
                        >
                            Connect instantly with a 24x7 specialist or choose to<br/> video visit a particular doctor.
                        </Typography>
                        <Button variant="contained" sx={{textTransform:'none',backgroundColor:primaryColor, marginTop:3}}>Find Centers</Button>
                    </Box>
                </Grid>
                <Grid item lg={8} sx={{overflow:"hidden"}}>
                    <Box >
                        <img src={hero} alt="hero" style={{width:"80%",height:"100%"}} />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{width:"100vw", display:"flex", justifyContent:"center",height:"0px"}}>
                <SearchHospital/>
            </Box>
        </Box>
    )
}
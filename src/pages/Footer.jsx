
import './footer.modules.css';
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
// import mobile from './../assets/footer/mobile.png';
// import screen from './../assets/footer/screen.png';
import smallCase from './../assets/footer/smallCase.png';
import smallScreen from './../assets/footer/smallScreen.png';
import largeCase from './../assets/footer/largeCase.png';
import largeScreen from './../assets/footer/largeScreen.png';
import arrow from './../assets/footer/arrow.png';

export default function Footer(){
    let secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--second');

    return(
        <Box sx={{height:"100vh", backgroundColor:secondaryColor}}>
            <Box sx={{height:"60%",width:"100vw",display:"flex",justifyContent:"center"}}>
                <Box sx={{height:"100%",width:"40vw",display:"flex"}}>
                    <Box className="smallMobile">
                        <img src={smallScreen} alt="mobile" className='sms' />
                        <img src={smallCase} alt="scren" className='smc' />
                    </Box>
                    <Box className="largeMobile">
                        <img src={largeScreen} alt="mobile" className='lms' />
                        <img src={largeCase} alt="scren" className='lmc' />
                    </Box>
                </Box>
                <Box sx={{textAlign:"left",height:"100%",width:"60vw",border:"2px solid red"}}>
                    {/* <Box className={"arrowBox"} sx={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={arrow} alt="arrow" className='arrow' />
                    </Box> */}
                    <Typography sx={{
                        fontSize:"48px",fontWeight:"600",fontFamily:"Poppins",textAlign:"left"
                    }}>
                        Download the <br/> <span style={{color:"rgba(42, 167, 255, 1)"}}>Medify</span> App
                    </Typography>
                    <Typography sx={{
                        fontSize:"16px",
                        fontWeight:"700",
                        fontFamily:"Lato",
                        textAlign:"left",
                    }}>
                        Get the link to download the app
                    </Typography>

                </Box>
            </Box>
            <Box sx={{height:"60%", backgroundColor:"black"}}>

            </Box>
        </Box>
    )
}

import './footer.modules.css';
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Textfield from '@mui/material/TextField';
// import mobile from './../assets/footer/mobile.png';
// import screen from './../assets/footer/screen.png';
import smallCase from './../assets/footer/smallCase.png';
import smallScreen from './../assets/footer/smallScreen.png';
import largeCase from './../assets/footer/largeCase.png';
import largeScreen from './../assets/footer/largeScreen.png';
import appStore from './../assets/footer/apple-store.png';
import playStore from './../assets/footer/play-store.png';
import arrow from './../assets/footer/arrow.png';
import facebookIcon from "./../assets/footer/facebookIcon.png";
import twitterIcon from "./../assets/footer/twitterIcon.png";
import youtubeIcon from "./../assets/footer/youtubeIcon.png";
import pintrestIcon from "./../assets/footer/pintrestIcon.png";
import medifyIcon from "./../assets/logo.png";

export default function Footer(){
    let secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--second');
    let primary = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    let sublinks = ["About Us","Orthology","About Us","Our Pricing","Neurology","Our Pricing","Our Gallery","Dental Care","Our Gallery","Appointment","Opthamology","Appointment","Privacy Policy", "Cardiology","Privacy Policy"];

    return(
        <Box sx={{height:"100vh", backgroundColor:secondaryColor}}>
            <Box sx={{height:"60%",width:"100%",display:"flex",justifyContent:"center"}}>
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
                <Box sx={{textAlign:"left",height:"100%",width:"60vw",display:"flex",justifyContent:"start"}}>
                    <Box className={"arrowBox"} sx={{paddingBottom:"20px",height:"100%",width:"10%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={arrow} alt="arrow" className='arrow' />
                    </Box>
                    <Box>
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
                            marginTop:"20px"
                        }}>
                            Get the link to download the app
                        </Typography>
                        <Box className="phoneForm">
                            <Box className={"prePhoneNumber"}>
                                <Typography sx={{
                                    fontSize:"14px",
                                    fontWeight:"700",
                                    fontFamily:"Lato",
                                    textAlign:"left",
                                    backgroundColor:"white"
                                }}>
                                    +91
                                </Typography>
                            </Box>
                            <input type="text" placeholder='Enter your phone number' style={{border:"none",width:"290px",height:"47px"}} />
                            <Button sx={{backgroundColor:primary, color:"white",textTransform:"none", marginLeft:"20px"}}>Send SMS</Button>
                        </Box>
                        <Box sx={{marginTop:"20px"}}>
                            <Box component={"img"} src={playStore} sx={{height:"69px",width:"244px"}}></Box>
                            <Box component={"img"} src={appStore} sx={{height:"69px", marginLeft:"30px",width:"244px"}}></Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Box sx={{height:"60%", backgroundColor:"#1B3C74", display:"flex",flexDirection:"column",alignItems:"center"
            }}>
                <Box sx={{height:"90%",width:"80vw",display:"flex",justifyContent:"center", paddingTop:"50px"}}>
                    <Box sx={{width:"30%", textAlign:"left"}}>
                        <Box sx={{height:"60%"}}>
                            <img src={medifyIcon} alt="medify" />
                            <Typography sx={{
                                fontSize:"24px",fontWeight:"700",fontFamily:"Poppins",textAlign:"left",color:primary,marginTop:"20px",display:"inline",marginLeft:"5px"
                            }}>Medify</Typography>
                        </Box>
                        <Box className="iconsBox" sx={{height:"40%"}}>
                            <img src={facebookIcon} alt="facebook" />
                            <img src={twitterIcon} alt="twitter" />
                            <img src={youtubeIcon} alt="youtube" />
                            <img src={pintrestIcon} alt="pintrest" />
                        </Box>
                    </Box>
                    <Box sx={{width:"70%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        {sublinks.map((sublink)=>(
                            <Typography sx={{
                                fontSize:"16px",fontWeight:"400", width:"200px",fontFamily:"Roboto",textAlign:"left",color:"white",marginTop:"10px"
                            }}>
                                <span style={{fontWeight:"900", fontSize:"15px", fontFamily:"Font Awesome 5 Free", color:"white"}}>&gt;  </span>
                                {sublink}
                            </Typography>
                        ))}
                    </Box>
                </Box>
                <Box sx={{height:"8%",width:"80vw", borderTop:"1px solid rgba(255, 255, 255, 0.1)"}}>
                    <Typography sx={{
                        fontSize:"16px",fontWeight:"400",fontFamily:"Poppins",textAlign:"left",color:"white"
                    }}>
                        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                    </Typography>

                </Box>
            </Box>
        </Box>
    )
}
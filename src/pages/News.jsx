
import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import cardimg from './../assets/news/cardimg.png'
import personimg from './../assets/news/person.png'

export default function News(){

return(<Box sx={{height:"120vh"}}>
    <Typography
        fontFamily="Poppins"
        fontSize="16px"
        fontWeight="600"
        color="rgba(42, 167, 255, 1)"
    >
            Blog & News
        </Typography>
        <Typography
            fontFamily="Poppins"
            fontSize="48px"
            fontWeight="600"
            marginBottom={"3vw"}
        >
            Read Our Latest News
        </Typography>
        <Box sx={{display:"flex",justifyContent:"space-around",padding:"0px 5vw 0px 5vw"}}>
            <Card sx={{maxWidth:345, textAlign:"left", height:"477px",width:"363px"}}>
                <CardMedia
                    sx={{height:"294px", width:"363px"}}
                    image={cardimg}
                    title="green iguana"
                />
                <CardContent sx={{height:"30%", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                    <Typography sx={{
                        fontFamily:"Poppins",
                        fontSize:"16px",
                        color:"rgba(119, 130, 157, 1)",
                        fontWeight:500
                    }}>
                        Medical | March 31,2022
                    </Typography>
                    <Typography sx={{
                        fontFamily:"Poppins",
                        fontSize:"18px",
                        fontWeight:500
                    }}>
                        6 Tips To Protect Your Mental Health When You’re Sick
                    </Typography>
                    <Box sx={{display:"flex"}}>
                        <Box sx={{height:"32px",width:"32px", marginRight:"10px"}}>
                            <img src={personimg} alt="person" />
                        </Box>
                        <Typography sx={{display:"inline"}}>
                            Rebecca Lee
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{maxWidth:345, textAlign:"left", height:"477px",width:"363px"}}>
                <CardMedia
                    sx={{height:"294px", width:"363px"}}
                    image={cardimg}
                    title="green iguana"
                />
                <CardContent sx={{height:"30%", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                    <Typography sx={{
                        fontFamily:"Poppins",
                        fontSize:"16px",
                        color:"rgba(119, 130, 157, 1)",
                        fontWeight:500
                    }}>
                        Medical | March 31,2022
                    </Typography>
                    <Typography sx={{
                        fontFamily:"Poppins",
                        fontSize:"18px",
                        fontWeight:500
                    }}>
                        6 Tips To Protect Your Mental Health When You’re Sick
                    </Typography>
                    <Box sx={{display:"flex"}}>
                        <Box sx={{height:"32px",width:"32px", marginRight:"10px"}}>
                            <img src={personimg} alt="person" />
                        </Box>
                        <Typography sx={{display:"inline"}}>
                            Rebecca Lee
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{maxWidth:345, textAlign:"left", height:"477px",width:"363px"}}>
                <CardMedia
                    sx={{height:"294px", width:"363px"}}
                    image={cardimg}
                    title="green iguana"
                />
                <CardContent sx={{height:"30%", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                    <Typography sx={{
                        fontFamily:"Poppins",
                        fontSize:"16px",
                        color:"rgba(119, 130, 157, 1)",
                        fontWeight:500
                    }}>
                        Medical | March 31,2022
                    </Typography>
                    <Typography sx={{
                        fontFamily:"Poppins",
                        fontSize:"18px",
                        fontWeight:500
                    }}>
                        6 Tips To Protect Your Mental Health When You’re Sick
                    </Typography>
                    <Box sx={{display:"flex"}}>
                        <Box sx={{height:"32px",width:"32px", marginRight:"10px"}}>
                        <img src={personimg} alt="person" />
                        </Box>
                        <Typography sx={{display:"inline"}}>
                            Rebecca Lee
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>)
}



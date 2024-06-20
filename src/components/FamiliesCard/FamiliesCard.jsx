
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function FamiliesCard({img,num,name}){

    return(
    <Card sx={{height:"43vh",width:"16vw", margin:"15px", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"end"}}>
        <CardMedia
            image={img}
            sx={{height:"40%",width:"45%"}}
        />
        <CardContent>
            <Typography sx={{
                fontSize:"48px",
                fontFamily:"Poppins",
                fontWeight:"600",
                textAlign:"center"
            }}>{num}</Typography>
            <Typography sx={{
                fontSize:"18px",
                color:"rgba(119, 130, 157, 1)",
                fontFamily:"Poppins",
                fontWeight:"500",
                textAlign:"center"
            }}>{name}</Typography>
        </CardContent>
    </Card>
    )
}
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import { CardMedia } from '@mui/material';


export default function OptionsCard({icon, text, selected = false}){
    // let secondaryColor = "#FAFBFE";
    let [secondaryColor, setSecondaryColor] = useState("#FAFBFE");
    let border = selected ? "1px solid green" : "1px solid #FAFBFE";
    let fw = selected ? "600" : "400";
    let textColor =  selected ? "green" : "rgba(171, 182, 199, 1)";

    let selectedColor = ()=>{
        if(selected){
            let sc = "#EEF8FF"
            setSecondaryColor(sc);
        }else{
            setSecondaryColor("#FAFBFE");
        }
    }
    useEffect(()=>{
        // console.log("secondaryColor",secondaryColor)
        selectedColor();
    },[secondaryColor, selected]);

    return (
        <Card className="options-card" sx={{backgroundColor:secondaryColor, height:"153px",width:"180px", border:border}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={icon}
                    alt="green iguana"
                    sx={{height:"50%", width:"50%", display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:"47px", paddingTop:"10px"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:textColor,fontFamily:"Poppins", fontSize: "18px", fontWeight:fw}}>
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
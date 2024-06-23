
import {Box} from "@mui/material";
import {useLocation} from "react-router-dom"
import Header from "./../../components/Header/Header"; 
import Resultspage from "./../Resultspage"; 
import Footer from "../Footer";


export default function HospitalsPage(){

    return(
        <div>
            <Header />
            <Resultspage bookings={true} />
            <Footer />
        </div>
    )
}
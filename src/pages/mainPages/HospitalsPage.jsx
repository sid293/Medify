
import {Box} from "@mui/material";
import {useLocation} from "react-router-dom"
import Header from "./../../components/Header/Header"; 
import Resultspage from "./../Resultspage"; 
import Faq from "../Faq";
import Footer from "../Footer";

export default function HospitalsPage(){
    const location = useLocation();

    return(<Box>
        <Header />
        <Resultspage loc={location.state} />
        <Faq />
        <Footer />
    </Box>)
}